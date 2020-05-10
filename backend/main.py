from firebase_admin import credentials, firestore, initialize_app
from flask import Flask, jsonify

from decorators import requires_auth_token
from settings import FIRESTORE_CREDENTIALS_PATH


app = Flask(__name__)


cred = credentials.Certificate(FIRESTORE_CREDENTIALS_PATH)
default_app = initialize_app(cred)
db = firestore.client()
clients_ref = db.collection('clients')


@app.route('/api/clients/', methods=['GET'])
@requires_auth_token
def clients():
    all_clients = [doc.to_dict() for doc in clients_ref.stream()]
    return jsonify(all_clients), 200


if __name__ == "__main__":
    app.run()
