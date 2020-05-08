from flask import Flask, jsonify


app = Flask(__name__)


@app.route('/api/test/')
def test_route():
    return jsonify({'response': 'Just getting set up'})


if __name__ == "__main__":
    app.run()
