from firebase_admin import credentials, firestore, initialize_app
from flask import Flask
from flask_caching import Cache

from settings import FIRESTORE_CREDENTIALS_PATH


app = Flask(__name__)

app.cache = Cache(app, config={'CACHE_TYPE': 'simple'})

cred = credentials.Certificate(FIRESTORE_CREDENTIALS_PATH)
default_app = initialize_app(cred)
db = firestore.client()
