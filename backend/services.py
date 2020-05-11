from flask import request
from google.oauth2 import id_token
from google.auth.transport import requests

from models import User
from settings import CLIENT_ID


def get_user_from_request():
    auth_header = request.headers.get('Authorization')
    token = auth_header.split(' ')[1]
    id_info = id_token.verify_oauth2_token(
        token, requests.Request(), CLIENT_ID)
    return User(name=id_info['name'], email=id_info['email'])
