var player=document.getElementById("vid");
document.getElementById("stop").onclick=function(){
player.pause();};
document.getElementById("play").onclick=function(){
player.play();};

function enableMute() { 
    vid.muted = true;
}
function enableUnmute() {
	vid.muted = false;
}