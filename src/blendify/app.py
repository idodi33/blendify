from flask import Flask, request
from flask_cors import CORS
from src.blendify import core


app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/api/add_to_queue', methods=['POST'])
def add_to_queue():
    """
    Requests a list of recommendations from spotify and enters
    the tracks to the user's queue.
    """
    params = request.json
    uris = core.get_recommandation_uris(artists=params.get('artists'),
                                        genres=params.get('genres'),
                                        tracks=params.get('tracks'),
                                        limit=params.get('limit'))
    core.add_uris_to_queue(uris)
    return 'Success!'


if __name__ == '__main__':
    app.run()
