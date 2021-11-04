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

async function getImageURL(itemName) {
    var result = await fetch("http://127.0.0.1:5000/api/image_url/" + itemName, {
        method: "GET",
        cache: "no-cache",
        headers:{
             "content_type":"application/json",
             "mode" : "no-cors"
        },
    });
    return result.text();
}

export { addToQueue, makePlaylist, getImageURL };