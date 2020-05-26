from firebase_admin import credentials, firestore, initialize_app
from flask import current_app, Flask, jsonify, request
from flask_caching import Cache
from google.cloud import ndb

from app import app, db
from decorators import requires_auth_token
from models import Client, Site
from page_speed_insights import PageSpeedInights
from serializers import serialize_site_to_compact


datastore_client = ndb.Client()

client_ref = db.collection('clients')
site_ref = db.collection('sites')
user_ref = db.collection('users')

_MOCK_SITE_LIST = [
    {
        'name': 'Test 1',
        'url': 'https://example1.com',
        'accessibility_score': 50,
        'best_practices_score': 50,
        'performance_score': 50,
        'pwa_score': 50,
        'seo_score': 50,
    },
    {
        'name': 'Test 2',
        'url': 'https://example2.com',
        'accessibility_score': 50,
        'best_practices_score': 50,
        'performance_score': 50,
        'pwa_score': 50,
        'seo_score': 50,
    },
    {
        'name': 'Test 3',
        'url': 'https://example3.com',
        'accessibility_score': 50,
        'best_practices_score': 50,
        'performance_score': 50,
        'pwa_score': 50,
        'seo_score': 50,
    },
]


@app.route('/api/clients/', methods=['GET', 'POST'])
@requires_auth_token
def clients():
    if request.method == 'GET':
        all_clients = []
        for doc in client_ref.stream():
            all_clients.append({
                'id': doc.id,
                'name': doc.to_dict()['name'],
            })

        return jsonify(all_clients), 200
    elif request.method == 'POST':
        client_name = request.json.get('name')
        if not client_name:
            raise Exception('Request body must have the name property')
        existing_client_stream = client_ref.where(
            'name', '==', client_name).limit(1).stream()
        existing_client = {client.id: client.to_dict()
                           for client in existing_client_stream}
        if existing_client:
            raise Exception(f'Client with name {client_name} already exists')
        new_client = Client.from_dict(request.json)
        client_ref.add(new_client.to_dict())
        return jsonify({'success': True}), 200
    else:
        raise Exception('Method not supported')


@app.route('/api/clients/<id>', methods=['DELETE', 'GET', 'PATCH'])
@requires_auth_token
def client(id):
    if request.method == 'GET':
        client = client_ref.document(id).get().to_dict()
        if client:
            return jsonify(client), 200
        else:
            raise Exception('Client not found')
    if request.method == 'DELETE':
        client = client_ref.document(id).get().to_dict()
        if client:
            client_ref.document(id).delete()
            return jsonify({'success': True}), 200
        else:
            raise Exception('Client not found')
    if request.method == 'PATCH':
        client = client_ref.document(id).get().to_dict()
        if client:
            try:
                name = request.json['name']
                client_ref.document(id).update(Client(name=name).to_dict())
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
        all_sites = [doc.to_dict() for doc in site_ref.stream()]
        compact_sites = []
        for site in all_sites:
            compact_sites.append(serialize_site_to_compact(site))
        return jsonify({'siteList': compact_sites}), 200
    elif request.method == 'POST':
        request_body = request.get_json()
        name = request_body.get('name', '')
        url = request_body.get('url', '')
        try:
            report_results = PageSpeedInights.run(url)
            site = Site(name, url, report_results)
            site_ref.add(site.to_dict())
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
    user_stream = user_ref.where(
        'email', '==', email).limit(1).stream()
    result = {'user': user.to_dict() for user in user_stream}
    if result:
        return jsonify(result['user']), 200
    else:
        raise Exception('User not found')


if __name__ == '__main__':
    app.run()
