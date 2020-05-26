from firebase_admin import credentials, firestore, initialize_app
from flask import current_app, Flask, jsonify, request
from flask_caching import Cache
from google.cloud import ndb

from app import app, db
from decorators import requires_auth_token
from models import Client, Site, User
from page_speed_insights import PageSpeedInights
from serializers import serialize_site_to_compact


datastore_client = ndb.Client()

client_ref = db.collection('clients')
site_ref = db.collection('sites')
user_ref = db.collection('users')


@app.route('/api/clients/', methods=['GET', 'POST'])
@requires_auth_token
def clients():
    if request.method == 'GET':
        with datastore_client.context():
            query = Client.query()
            all_clients = [{'name': client.name, 'id': client.key.urlsafe().decode('utf-8')}
                           for client in query]
            return jsonify(all_clients), 200
    elif request.method == 'POST':
        client_name = request.json.get('name')
        if not client_name:
            raise Exception('Request body must have the name property')
        with datastore_client.context():
            query = Client.query().filter(Client.name == client_name)
            clients = [client.name for client in query]
            if len(clients) >= 1:
                raise Exception(
                    f'Client with name {client_name} already exists')
            new_client = Client(name=client_name)
            new_client.put()
            return jsonify({'success': True}), 200
    else:
        raise Exception('Method not supported')


@app.route('/api/clients/<id>', methods=['DELETE', 'GET', 'PATCH'])
@requires_auth_token
def client(id):
    if request.method == 'GET':
        with datastore_client.context():
            client_key = ndb.Key(urlsafe=id)
            client = client_key.get()
            client_response = {
                'name': client.name,
                'id': client.key.urlsafe().decode('utf-8'),
            }
            if client:
                return jsonify(client_response), 200
            else:
                raise Exception('Client not found')
    if request.method == 'DELETE':
        client_key = ndb.Key(urlsafe=id)
        if client_key:
            client_key.delete()
            return jsonify({'success': True}), 200
        else:
            raise Exception('Client not found')
    if request.method == 'PATCH':
        client_key = ndb.Key(urlsafe=id)
        if client_key:
            try:
                client_key.name = request.json['name']
                client_key.put()
                return jsonify({'success': True}), 200
            except:
                raise Exception('Client object not formatted correctly')
        else:
            raise Exception('Client not found')
    else:
        raise Exception('Method not supported')


@app.route('/api/sites/', methods=['GET', 'POST'])
@requires_auth_token
def sites():
    if request.method == 'GET':
        with datastore_client.context():
            query = Site.query()
            compact_sites = [Site.to_compact(site) for site in query]
            return jsonify({'siteList': compact_sites}), 200
    elif request.method == 'POST':
        request_body = request.get_json()
        name = request_body.get('name', '')
        url = request_body.get('url', '')
        try:
            report_results = PageSpeedInights.run(url)
            with datastore_client.context():
                site = Site(name=name, url=url)
                site.accessibility_score = report_results['accessibility_score']
                site.best_practices_score = report_results['best_practices_score']
                site.performance_score = report_results['performance_score']
                site.seo_score = report_results['seo_score']
                site.pwa_score = report_results['pwa_score']
                site.put()
            return jsonify({'success': True}), 200
        except:
            raise Exception('Page Speed Insights API returned an error')
    else:
        raise Exception('Method not supported')


@app.route('/api/sites/<id>', methods=['DELETE', 'GET', 'PATCH'])
@requires_auth_token
def site(id):
    if request.method == 'DELETE':
        # Delete the site with provided ID. Think about admin rights here.
        pass
    elif request.method == 'GET':
        # Get the site with provided ID.
        pass
    elif request.method == 'PATCH':
        # Update the site with provided ID. Only support certain types of
        # update.
        pass
    else:
        raise Exception('Method not supported')


@app.route('/api/users/<email>', methods=['GET'])
@requires_auth_token
def user(email):
    with datastore_client.context():
        query = User.query().filter(User.email == email)
        users = [user.email for user in query]
        if users[0]:
            return jsonify({'success': True}), 200
        else:
            raise Exception('User not found')


if __name__ == '__main__':
    app.run()
