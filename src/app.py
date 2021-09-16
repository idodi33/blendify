from flask import Flask, request

from . import core


app = Flask(__name__)


@app.route('/api/add_to_queue', methods=['POST'])
def add_to_queue():
    """
    Requests a list of recommendations from spotify and enters
    the tracks to the user's queue.
    """
    params = request.json()
    uris = core.get_recommandation_uris(artists=params['artists'],
                                        genres=params['genres'],
                                        tracks=params['tracks'],
                                        limit=params['limit'])
    core.add_uris_to_queue(uris)
    return 'Success!'


if __name__ == '__main__':
    app.run(host='0.0.0.0')
