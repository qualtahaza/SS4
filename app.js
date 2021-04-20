import Navbar from "./Navbar.js";
import Video from "./video.js";
import VideoList from "./videoList.js"
import data from "./data.js"

let $videolist = document.getElementById('my-list')
$videolist.setAttribute('video', JSON.stringify(data))