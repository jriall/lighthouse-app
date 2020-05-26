import os
from os.path import join, dirname
from dotenv import load_dotenv

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

CLIENT_ID = os.environ.get('CLIENT_ID')
PAGE_SPEED_INSIGHTS_API_KEY = os.environ.get('PAGE_SPEED_INSIGHTS_API_KEY')
