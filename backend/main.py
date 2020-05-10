from firebase_admin import credentials, firestore, initialize_app
from flask import Flask, jsonify, request

from decorators import requires_auth_token
from settings import FIRESTORE_CREDENTIALS_PATH
from models import Client


app = Flask(__name__)


cred = credentials.Certificate(FIRESTORE_CREDENTIALS_PATH)
default_app = initialize_app(cred)
db = firestore.client()
client_ref = db.collection('clients')


@app.route('/api/clients/', methods=['GET', 'POST'])
@requires_auth_token
def clients():
    if request.method == 'GET':
        all_clients = [doc.to_dict() for doc in client_ref.stream()]
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


if __name__ == "__main__":
    app.run()
