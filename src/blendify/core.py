from typing import List
import spotipy
from spotipy.oauth2 import SpotifyOAuth

SCOPE = "user-library-read, user-modify-playback-state"
DEFAULT_LIMIT = 30


sp = spotipy.Spotify(auth_manager=SpotifyOAuth(scope=SCOPE))


def _get_artist_ids(artist_names: List[str]) -> List[str]:
    if artist_names is None:
        return []
    return [sp.search(q=artist, type='artist')['artists']['items'][0]['id'] for artist in artist_names]


def _get_track_ids(track_names: List[str]) -> List[str]:
    if track_names is None:
        return []
    return [sp.search(q=track, type='track')['tracks']['items'][0]['id'] for track in track_names]


def get_recommandations(artists: List[str]=None, genres: List[str]=None, tracks: List[str]=None,
                           limit: int=DEFAULT_LIMIT) -> List:
    """
    Asks the Spotify API for recommendations based on the given parameters and returns
    a list of the recommended tracks.
    """
    seed_artists = _get_artist_ids(artists)
    seed_tracks = _get_track_ids(tracks)
    recommendations = sp.recommendations(seed_artists=seed_artists, seed_genres=genres, seed_tracks=seed_tracks,
                                         limit=limit)
    return recommendations['tracks']


def get_recommandation_uris(artists: List[str]=None, genres: List[str]=None, tracks: List[str]=None,
                           limit: int=DEFAULT_LIMIT) -> List[str]:
    """
    Asks the Spotify API for recommendations based on the given parameters and returns
    a list of the recommended tracks' uris.
    """
    recommendations = get_recommandations(artists=artists, genres=genres, tracks=tracks, limit=limit)
    return [track['uri'] for track in recommendations]


def add_uris_to_queue(uris: List[str], device_id: str=None) -> None:
    """
    Gets a list of track uris and adds them to the queue in one of the user's
    devices (defaults to the user's currently active device).
    """
    for uri in uris:
        sp.add_to_queue(uri, device_id=device_id)


if __name__ == '__main__':
    # recommendations = get_recommandations(artists=['Fortisakharof', 'Portishead', 'Assaf Amdursky', 'Pixies'],
    #                                genres=['trip-hop'])
    recommendations = get_recommandations(artists=['Kaveret', 'Red Hot Chili Peppers', 'Ariana Grande'],
                                          genres=['rock', 'pop'])
    for idx, track in enumerate(recommendations):
        print(idx, track['artists'][0]['name'], " – ", track['name'])
    add_uris_to_queue([track['uri'] for track in recommendations])