from flask import Flask
from flask_caching import Cache
from google.cloud import ndb


app = Flask(__name__)

app.cache = Cache(app, config={'CACHE_TYPE': 'simple'})

datastore_client = ndb.Client()
