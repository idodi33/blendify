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


@app.route('/api/make_playlist', methods=['POST'])
def make_playlist():
    """
    Requests a list of recommendations from spotify and enters
    the tracks to a playlist with an appropriate name, of the format
    "<artist> / <track> / <genre>"
    """
    params = request.json
    uris = core.get_recommandation_uris(artists=params.get('artists'),
                                        genres=params.get('genres'),
                                        tracks=params.get('tracks'),
                                        limit=params.get('limit'))
    playlist_name = ' / '.join([
        *params.get('artists'),
        *params.get('genres'),
        *params.get('tracks')])
    core.make_playlist_from_uris(uris, playlist_name)
    return 'Success!'


@app.route('/api/image_url/<name>')
def get_image_url(name: str):
    return core.get_artist_image_url(name)


if __name__ == '__main__':
    app.run()
