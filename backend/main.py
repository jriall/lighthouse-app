from flask import current_app, Flask, jsonify, request
from flask_caching import Cache
from google.cloud import ndb

from app import app, datastore_client
from google_auth import requires_auth_token, get_user_id_info
from models import Client, Report, Site, User
from page_speed_insights import PageSpeedInights


@app.route('/api/v1/clients/', methods=['GET', 'POST'])
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


@app.route('/api/v1/clients/<id>', methods=['DELETE', 'GET', 'PATCH'])
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


@app.route('/api/v1/sites/', methods=['GET', 'POST'])
@requires_auth_token
def sites():
    if request.method == 'GET':
        with datastore_client.context():
            query = Site.query()
            compact_sites = []
            for site in query:
                report = Report.query().filter(
                    Report.site == site.key).order(-Report.created_on).fetch(1)
                compact_site = Site.to_compact(site)
                compact_site.update(Report.to_dict(report[0]))
                compact_sites.append(compact_site)
            return jsonify({'siteList': compact_sites}), 200
    elif request.method == 'POST':
        request_body = request.get_json()
        name = request_body.get('name', '')
        url = request_body.get('url', '')
        id_info = get_user_id_info(request)
        email = id_info['email']
        try:
            report_results = PageSpeedInights.run(url)
            with datastore_client.context():
                user_key = User.query().filter(
                    User.email == email).fetch(keys_only=True)[0]
                site = Site(name=name, url=url)
                site.created_by = user_key
                site.last_edited_by = user_key
                site_key = site.put()
                report = Report(
                    site=site_key,
                    accessibility_score=report_results['accessibility_score'],
                    best_practices_score=report_results['best_practices_score'],
                    performance_score=report_results['performance_score'],
                    seo_score=report_results['seo_score'],
                    pwa_score=report_results['pwa_score'],
                )
                report.put()
            return jsonify({'success': True}), 200
        except:
            raise Exception('Page Speed Insights API returned an error')
    else:
        raise Exception('Method not supported')


@app.route('/api/v1/sites/<id>', methods=['DELETE', 'GET', 'PATCH'])
@requires_auth_token
def site(id):
    if request.method == 'DELETE':
        with datastore_client.context():
            try:
                site_key = ndb.Key(urlsafe=id)
                site_key.delete()
                return jsonify({'success': True}), 200
            except:
                raise Exception('Site not found')
    elif request.method == 'GET':
        with datastore_client.context():
            try:
                site_key = ndb.Key(urlsafe=id)
                site = site_key.get()
                return jsonify(Site.to_compact(site)), 200
            except:
                raise Exception('Site not found')

    elif request.method == 'PATCH':
        # Update the site with provided ID. Only support certain types of
        # update.
        pass
    else:
        raise Exception('Method not supported')


@app.route('/api/v1/tasks/update-all-sites', methods=['GET'])
def update_all_sites():
    appengine_cron_header = request.headers.get('X-Appengine-Cron')
    if not appengine_cron_header:
        raise Exception(
            'This is a cron task which can only be called from within Appengine')
    with datastore_client.context():
        sites = Site.query()
        for site in sites:
            report_results = PageSpeedInights.run(site.url)
            report = Report(
                site=site.key,
                accessibility_score=report_results['accessibility_score'],
                best_practices_score=report_results['best_practices_score'],
                performance_score=report_results['performance_score'],
                seo_score=report_results['seo_score'],
                pwa_score=report_results['pwa_score'],
            )
            report.put()

    return jsonify({'success': True}), 200


@app.route('/api/v1/users/<email>', methods=['GET'])
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
