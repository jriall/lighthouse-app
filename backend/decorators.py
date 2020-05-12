import functools
from flask import current_app, request

from google.oauth2 import id_token
from google.auth.transport import requests

from models import User
from settings import CLIENT_ID


# TODO(jriall): Improve error handling.
def get_user_info(auth_header):
    if not auth_header:
        raise Exception('No auth header provided')
    auth_type, token = auth_header.split(' ')
    if auth_type != 'Bearer':
        raise Exception('Incorrect auth type. Should be Bearer')
    try:
        id_info = id_token.verify_oauth2_token(
            token, requests.Request(), CLIENT_ID)
        if id_info['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
            raise Exception('Wrong issuer')
        email, name = id_info['email'], id_info['name']
        user_cache_key = f'User:{email}'
        if not current_app.cache.get(user_cache_key):
            user = User(email=email, name=name)
            current_app.cache.set(user_cache_key, user)
            # Write user to DB if they don't exist.
    except:
        raise Exception('User token invalid')


def requires_auth_token(func):

    @functools.wraps(func)
    def inner(*args, **kwargs):
        try:
            auth_header = request.headers.get('Authorization')
            get_user_info(auth_header)
            return func(*args, **kwargs)
        except Exception as e:
            return {'success': False, 'message': str(e), 'status_code': 500}
    return inner