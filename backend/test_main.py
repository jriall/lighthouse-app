import json
import os
import unittest

from backend.main import app


class BasicTests(unittest.TestCase):
    def setUp(self):
        app.config['TESTING'] = True
        app.config['WTF_CSRF_ENABLED'] = False
        app.config['DEBUG'] = False
        self.app = app.test_client()

        self.assertEqual(app.debug, False)

    def tearDown(self):
        pass

    def test_route_returns_success_response(self):
        response = self.app.get('/api/test/', follow_redirects=True)
        expected_response = json.loads(response.get_data(as_text=True)), {
            'response': 'Just getting set up'}

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response, expected_response)


if __name__ == "__main__":
    unittest.main()
