from flask import Flask
from flask_caching import Cache
from google.cloud import ndb


client = ndb.Client()


def ndb_wsgi_middleware(wsgi_app):
    def middleware(environ, start_response):
        with client.context():
            return wsgi_app(environ, start_response)

    return middleware


app = Flask(__name__)
app.wsgi_app = ndb_wsgi_middleware(app.wsgi_app)  # Wrap the app in middleware.

app.cache = Cache(app, config={'CACHE_TYPE': 'simple'})
