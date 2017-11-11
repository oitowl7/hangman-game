
// myAudio = document.getElementById("audio1");

// function setHalfVolume() {
// 	myAudio.volume=0.4;
// }
var wins=0;
var losses=0;
var houses= ["Allyrion‎",	"Arryn‎",	"Ashford",	"Baelish",	"Baratheon","Beesbury‎",	"Belgrave‎",	"Blackfyre‎","Blackmont‎","Blacktyde‎",	"Blackwood‎",	"Blount‎",	"Bolton‎",	"Botley‎",	"Bracken‎",	"Branfield‎",	"Bulwer‎",	"Cargyll‎",	"Caron‎",	"Cassel‎",	"Casterly‎",	"Caulfield‎",	"Cerwyn‎",	"Clegane‎",	"Connington‎",	"Corbray‎",	"Crakehall‎",	"Cuy‎",	"Dalt‎",	"Darry‎",	"Dayne‎",	"Dondarrion‎",	"Dormund‎",	"Dorne",	"Durrandon‎",	"Dustin‎",	"Egen‎",	"Erenford‎",	"Estermont‎",	"Florent‎",	"Forrester‎",	"Fossoway‎",	"Frey‎",	"Glover‎",	"Greenfield‎",	"Greyjoy‎",	"Harlaw‎",	"Harroway‎",	"Hightower‎",	"Hoare‎",	"Hollard‎",	"Holt‎",	"Hornwood‎",	"Hunter‎",	"Jordayne‎",	"Justman‎",	"Karstark‎",	"Kenning‎",	"Lannister‎",	"Lefford‎",	"Lorch‎",	"Lothston‎",	"Lynderly‎",	"Mallister‎",	"Manwoody‎",	"Marbrand‎",	"Marsh‎",	"Martell‎",	"Mollen‎",	"Moore‎",	"Mooton‎",	"Mormont‎",	"Morrigen‎",	"Mudd‎",	"Oakheart‎",	"Payne‎",	"Poole‎",	"Qoherys‎",	"Qorgyle‎",	"Redwyne‎",	"Reed‎",	"Reyne‎",	"Rosby‎",	"Royce‎",	"Rykker‎",	"Ryswell‎",	"Santagar‎",	"Sarsfield‎",	"Seaworth‎",	"Selmy‎",	"Serrett‎",	"Slynt‎",	"Smallwood‎",	"Stark‎",	"Staunton‎",	"Stokeworth‎",	"Strong‎",	"Swann‎",	"Swyft‎",	"Tallhart‎",	"Targaryen‎",	"Tarly‎",	"Tarth‎",	"Thorne‎",	"Tollett‎",	"Towers‎",	"Toyne‎",	"Trant‎",	"Tully‎",	"Tyrell‎",	"Uller‎",	"Umber‎",	"Velaryon‎",	"Waynwood‎",	"Wells‎",	"Westerling‎",	"Whent‎",	"Whitehill‎",	"Wode‎",	"Wylde‎",	"Yarwyck‎"]
var house= houses[Math.floor(Math.random() * houses.length)];
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's','t', 'u', 'v', 'w', 'x', 'y', 'z'];
var answerArray = [];
var count = house.length - 1;
var correct = 0;
var incorrect = 0;
var check = [];
var d = [];
var used = [];
var guesses = 9;



function displaywins() {
	document.getElementById("wins").innerHTML = wins;

}

function displaylosses() {
	document.getElementById("loss").innerHTML = losses;

}

// temporary addwin and addloss buttons
function addwin() {
	wins = wins + 1;
	// console.log(wins);
	document.getElementById("wins").innerHTML = wins;
}
function addloss() {
	losses = losses + 1;
	// console.log(losses);
	document.getElementById("loss").innerHTML = losses;
}

	
// console.log(house);
// console.log(house.length);

function blankmaker() {
  for (var i = 0; i < house.length - 1; i++) {
    answerArray[i] = "_";
  }
  a = answerArray.join(" ");
  document.getElementById("game-board").innerHTML = a;

}




function notblank() {
 
  // document.getElementById("game-board1").innerHTML = house;
}

function newgame() {
    answerArray = 0;
	answerArray = [];
	house = houses[Math.floor(Math.random() * houses.length)];
	blankmaker();
	notblank();
	correct = 0;
	incorrect = 0;
	count = house.length - 1;
    used = 0;
	used = [];
	document.getElementById("img-num").src="./assets/images/1.png";
    document.getElementById("letters-guessed").innerHTML = "_";
    guesses = 9;
    document.getElementById("remaining").innerHTML = guesses;

}


// main things that happen 
 document.onkeydown = function() {
 // 	
        console.log(used);
 		var letter = String.fromCharCode(event.keyCode).toLowerCase();
        var lcl = letter.toLowerCase();
        var ucl = letter.toUpperCase();
  

        // verify that letter hasn't been used yet
    	if (alphabet.indexOf(lcl) == -1) {
    		alert("use a letter.....moron");
    		return;
    	}

        if(used.indexOf(lcl) !== -1) {
        	alert("this letter has already been used....moron");
        	return;
        }




        used.push(letter);




        // checking if letter is in the house array
    	for (var i = 0; i < house.length - 1; i++){

    		if (lcl === house[i]) {
    			answerArray[i] = letter;
    			var b = answerArray.join("");
    			document.getElementById("game-board").innerHTML = b;
    			correct++;
    			
    		}
    		else if (ucl === house[i]){
    			answerArray[i] = letter;
    			var a = answerArray.join("");
    			document.getElementById("game-board").innerHTML = a;
    			correct++;
    			
    		}
    		else {
    			check[i] = 0
    		}

    		
    	}

    	// checks to see if the value was in the string or not
    	var c = check.join();
    	for (var i = 0; i < house.length - 1; i++) {
   			d[i] = 0;
            check = [];
   		}

    	if (c != d) {
    		// correct++;
    		check = [];
    	}
    	else{
    		incorrect++;
    		check = [];
            guesses--;
            
    	}

        



    	// display 1 if none incorrect
    	if (incorrect == 0) {
    		document.getElementById("img-num").src="./assets/images/1.png"
    	}
    	// display image 2 if 1 incorrect
    	else if (incorrect == 1) {
    		document.getElementById("img-num").src="./assets/images/2.png"
    	}
    	// display image 3 if 2 incorrect
    	else if (incorrect == 2) {
    		document.getElementById("img-num").src="./assets/images/3.png"
    	}
    	// display image 4 if 3 incorrect
    	else if (incorrect == 3) {
    		document.getElementById("img-num").src="./assets/images/4.png"
    	}
    	// display image 5 if 4 incorrect
    	else if (incorrect == 4) {
    		document.getElementById("img-num").src="./assets/images/5.png"
    	}
    	// display image 6 if 5 incorrect
    	else if (incorrect == 5) {
    		document.getElementById("img-num").src="./assets/images/6.png"
    	}
    	// display image 7 if 6 incorrect
    	else if (incorrect == 6) {
    		document.getElementById("img-num").src="./assets/images/7.png"
    	}
    	// display image 8 if 7 incorrect
    	else if (incorrect == 7) {
    		document.getElementById("img-num").src="./assets/images/8.png"
    	}
    	// display image 9 if 8 incorrect
    	else if (incorrect == 8) {
    		document.getElementById("img-num").src="./assets/images/9.png"
    	}
    	// display image 11 if 9 incorrect
    	else if (incorrect == 9) {
    		document.getElementById("img-num").src="./assets/images/11.png"
    	}


        //display letters guessed and letters remaining;
        document.getElementById("letters-guessed").innerHTML = used;
        document.getElementById("remaining").innerHTML = guesses;

    	if(correct == count) {
    		alert("you won! press new game to start over");
    		wins++;
    		document.getElementById('img-num').src='./assets/images/10.jpg';
            document.getElementById("wins").innerHTML = wins;
    	}
    	else if (incorrect == 9) {
    		document.getElementById("img-num").src="./assets/images/11.png"
    		setTimeout(alert("you've killed ned and you really should feel bad about that. Press new game to start over...but it won't be the same. You've killed the real ned."), 100);
    		losses++;
            document.getElementById("loss").innerHTML = losses;
    	}
        

    }

