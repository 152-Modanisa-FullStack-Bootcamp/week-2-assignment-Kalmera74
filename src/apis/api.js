import axios from "axios";

export async function getAll() {
    return (await axios.get("https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos")).data;
}

export async function getFavorites() {
    let videos = await getAll();
    return videos.filter(video => video.favorite);
}


const api = {
    getAll,
    getFavorites
};

export default api;