import os
from os.path import join, dirname
from dotenv import load_dotenv

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

FIRESTORE_CREDENTIALS_PATH = os.environ.get('FIRESTORE_CREDENTIALS_PATH')
CLIENT_ID = os.environ.get('CLIENT_ID')
