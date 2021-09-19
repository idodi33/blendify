function postItems(url, artists, tracks, genres) {
    let data = {'artists': artists, 'tracks': tracks, 'genres': genres};
    fetch(url, {
         method:"POST",
         cache: "no-cache",
         headers:{
             "content_type":"application/json",
             "mode" : "no-cors"
         },
         body:JSON.stringify(data)
         }
    )
}

function addToQueue(artists, tracks, genres) {
    postItems("http://127.0.0.1:5000/api/add_to_queue", artists, tracks, genres);
}

function makePlaylist(artists, tracks, genres) {
    postItems("http://127.0.0.1:5000/api/make_playlist", artists, tracks, genres);
}

export { addToQueue, makePlaylist };