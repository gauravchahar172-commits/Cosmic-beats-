let audio = new Audio();
let playing=false;

function playSong(url,title,artist,cover){

audio.src=url;
audio.play();

document.getElementById("title").innerText=title;
document.getElementById("artist").innerText=artist;
document.getElementById("cover").src=cover;

document.getElementById("player").style.display="flex";

playing=true;

}

function togglePlay(){

if(playing){
audio.pause();
playing=false;
}else{
audio.play();
playing=true;
}

}
