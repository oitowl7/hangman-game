
// myAudio = document.getElementById("audio1");

// function setHalfVolume() {
// 	myAudio.volume=0.4;
// }
var wins=0;
var losses=0;

function displaywins() {
	document.getElementById("wins").innerHTML = wins;

}

function displaylosses() {
	document.getElementById("loss").innerHTML = losses;

}


function addwin() {
	wins = wins + 1;
	console.log(wins);
	document.getElementById("wins").innerHTML = wins;
}
function addloss() {
	losses = losses + 1;
	console.log(losses);
	document.getElementById("loss").innerHTML = losses;
}