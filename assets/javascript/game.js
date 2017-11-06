
// myAudio = document.getElementById("audio1");

// function setHalfVolume() {
// 	myAudio.volume=0.4;
// }
var wins=0;
var losses=0;
var houses= ["Allyrion‎",	"Arryn‎",	"Ashford",	"Baelish",	"Baratheon","Beesbury‎",	"Belgrave‎",	"Blackfyre‎","Blackmont‎","Blacktyde‎",	"Blackwood‎",	"Blount‎",	"Bolton‎",	"Botley‎",	"Bracken‎",	"Branfield‎",	"Bulwer‎",	"Cargyll‎",	"Caron‎",	"Cassel‎",	"Casterly‎",	"Caulfield‎",	"Cerwyn‎",	"Clegane‎",	"Connington‎",	"Corbray‎",	"Crakehall‎",	"Cuy‎",	"Dalt‎",	"Darry‎",	"Dayne‎",	"Dondarrion‎",	"Dormund‎",	"Dorne",	"Durrandon‎",	"Dustin‎",	"Egen‎",	"Erenford‎",	"Estermont‎",	"Florent‎",	"Forrester‎",	"Fossoway‎",	"Frey‎",	"Glover‎",	"Greenfield‎",	"Greyjoy‎",	"Harlaw‎",	"Harroway‎",	"Hightower‎",	"Hoare‎",	"Hollard‎",	"Holt‎",	"Hornwood‎",	"Hunter‎",	"Jordayne‎",	"Justman‎",	"Karstark‎",	"Kenning‎",	"Lannister‎",	"Lefford‎",	"Lorch‎",	"Lothston‎",	"Lynderly‎",	"Mallister‎",	"Manwoody‎",	"Marbrand‎",	"Marsh‎",	"Martell‎",	"Mollen‎",	"Moore‎",	"Mooton‎",	"Mormont‎",	"Morrigen‎",	"Mudd‎",	"Oakheart‎",	"Payne‎",	"Poole‎",	"Qoherys‎",	"Qorgyle‎",	"R",	"Redwyne‎",	"Reed‎",	"Reyne‎",	"Rosby‎",	"Royce‎",	"Rykker‎",	"Ryswell‎",	"Santagar‎",	"Sarsfield‎",	"Seaworth‎",	"Selmy‎",	"Serrett‎",	"Slynt‎",	"Smallwood‎",	"Stark‎",	"Staunton‎",	"Stokeworth‎",	"Strong‎",	"Swann‎",	"Swyft‎",	"Tallhart‎",	"Targaryen‎",	"Tarly‎",	"Tarth‎",	"Thorne‎",	"Tollett‎",	"Towers‎",	"Toyne‎",	"Trant‎",	"Tully‎",	"Tyrell‎",	"Uller‎",	"Umber‎",	"Velaryon‎",	"Waynwood‎",	"Wells‎",	"Westerling‎",	"Whent‎",	"Whitehill‎",	"Wode‎",	"Wylde‎",	"Yarwyck‎"]
var house= houses[Math.floor(Math.random() * houses.length)];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];


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
// check for words array
// for (var i = 0; i < words.length; i++){
// 	console.log(words[i])
// }
	
console.log(house);

result = function () {
wordHolder = document.getElementById('game-board');
correct = document.createElement('ul');

for (var i = 0; i < word.length; i++) {
  correct.setAttribute('id', 'my-word');
  guess = document.createElement('li');
  guess.setAttribute('class', 'guess');
  if (word[i] === "-") {
    guess.innerHTML = "-";
    space = 1;
  } else {
    guess.innerHTML = "_";
  }

  geusses.push(guess);
  wordHolder.appendChild(correct);
  correct.appendChild(guess);
}
}