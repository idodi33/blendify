export default function addToQueue(artists, tracks, genres) {
    let data = {'artists': artists, 'tracks': tracks, 'genres': genres};
    fetch("http://127.0.0.1:5000/api/add_to_queue", {
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