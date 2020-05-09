from flask import Flask, jsonify
from decorators import requires_auth_token


app = Flask(__name__)


@app.route('/api/test/')
@requires_auth_token
def test_route():
    return jsonify({'response': 'Just getting set up'})


if __name__ == "__main__":
    app.run()
