const genres = [
"Hindi","Punjabi","Phonk","Hip Hop",
"EDM","Pop","Rock","LoFi","Tamil","Telugu"
];

const genreContainer = document.getElementById("genres");

genres.forEach(g=>{
let div=document.createElement("div");
div.className="genre";
div.innerText=g;

div.onclick=()=>loadGenre(g);

genreContainer.appendChild(div);
});

async function loadGenre(genre){

let res = await fetch(`https://saavn.dev/api/search/songs?query=${genre}`);
let data = await res.json();

displaySongs(data.data.results);

}

function displaySongs(list){

let container=document.getElementById("songs");
container.innerHTML="";

list.forEach(song=>{

let div=document.createElement("div");
div.className="song";

div.innerHTML=`
<img src="${song.image[1].url}" width="100%">
<h4>${song.name}</h4>
<p>${song.primaryArtists}</p>
<button onclick="playSong('${song.downloadUrl[4].url}','${song.name}','${song.primaryArtists}','${song.image[1].url}')">Play</button>
`;

container.appendChild(div);

});

}

async function searchSongs(){

let q=document.getElementById("searchInput").value;

let res = await fetch(`https://saavn.dev/api/search/songs?query=${q}`);
let data = await res.json();

displaySongs(data.data.results);

             }
