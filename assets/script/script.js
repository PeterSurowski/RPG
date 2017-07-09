var opponentChosen;
var opponentOneHp = 30;
var opponentTwoHp = 50;
var opponentThreeHp = 20;
var playerHp = 100;
var ranNumPlayer, ranNumZombieOne, ranNumZombieTwo,ranNumZombieThree;

function instructionsHider() {
	var instructionsHider = document.getElementById('instructions');
	instructionsHider.className = 'hidden';
	setTimeout(function() {
		instructionsHider.style.display = "none";
		var firstAppears = document.getElementById('first-zombie');
		firstAppears.className = 'unhidden';
		var secondAppears = document.getElementById('second-zombie');
		secondAppears.className = 'unhidden';
		var thirdAppears = document.getElementById('third-zombie');
		thirdAppears.className = 'unhidden';
		var chooseAppears = document.getElementById('choose');
		chooseAppears.className = 'unhidden';
	}, 2000);
}

function zombieImgAdderOne() {
	document.getElementById('opponent-pic').innerHTML = '<img src="assets/images/zombie-one-cropped-243X355.png">';
	document.getElementById('opponent-info').innerHTML = '<p id="description"><b>Description:</b> He was probably once a strong man, but he died long ago and decay has somewhat weakened him. Take him down, but be careful.</p><p id="difficulty"><b>Difficulty:</b> Medium</p>';
	document.getElementById('opponent-hp').innerHTML = '<h3 id="hp"><b>Enemy HP :  </b>' + opponentOneHp + '</h3>';
	document.getElementById('player-hp').innerHTML = '<h3 id="playerhp"><b>Your HP :  </b>' + playerHp + '</h3>';
}

function zombieImgAdderTwo() {
	document.getElementById('opponent-pic').innerHTML = '<img src="assets/images/zombie-two-355X464.png">';
	document.getElementById('opponent-info').innerHTML = '<p id="description"><b>Description:</b> Somehow his dead eyes seem to seeth with anger. He is strong and fast, but the strength of his attacks is erratic.</p><p id="difficulty"><b>Difficulty:</b> Hard</p>';
	document.getElementById('opponent-hp').innerHTML = '<h3 id="hp"><b>Enemy HP :  </b>' + opponentTwoHp + '</h3>';
	document.getElementById('player-hp').innerHTML = '<h3 id="playerhp"><b>Your HP :  </b>' + playerHp + '</h3>';
}


function zombieImgAdderThree() {
	document.getElementById('opponent-pic').innerHTML = '<img src="assets/images/zombie-three-214X355.png">';
	document.getElementById('opponent-info').innerHTML = '<p id="description"><b>Description:</b> He has not been dead for long, but he is missing an arm. Dispatch him quickly.</p><p id="difficulty"><b>Difficulty:</b> Easy</p>';
	document.getElementById('opponent-hp').innerHTML = '<h3 id="hp"><b>Enemy HP :  </b>' + opponentThreeHp + '</h3>';
	document.getElementById('player-hp').innerHTML = '<h3 id="playerhp"><b>Your HP :  </b>' + playerHp + '</h3>';
}


function fightZombie() {
	var backgroundChanger = document.getElementById('background');
	backgroundChanger.className = 'background-fade background-mover';
	setTimeout(function() {
		backgroundChanger.style.display = 'none';
		var fightScreen = document.getElementById('fight-screen');
		fightScreen.className = 'unhidden';
	}, 2000);
}

function fightButton() {
	//Puts a flash of red behind opponent-pic.
	document.getElementById('opponent-pic').classList.add('overlay');
	setTimeout(function() {
		document.getElementById('opponent-pic').classList.remove('overlay');
	}, 50);
	//Takes some HP from opponent.
	ranNumPlayer = Math.floor((Math.random() * 10) + 10);
	opponentOneHp = opponentOneHp - ranNumPlayer;
	document.getElementById('opponent-hp').innerHTML = '<h3 id="hp"><b>Enemy HP :  </b>' + opponentOneHp + '</h3>';
	//If opponent HP reaches 0, return to "choose" screen.
	if (opponentOneHp <= 0) {
		alert('opponent hp is 0 or lower.')
		var fightScreen = document.getElementById('fight-screen');
		fightScreen.className = 'background-fade background-mover';
		var backgroundUnhider = document.getElementById('background');
		setTimeout(function() {
			backgroundUnhider.style.display = 'block';
			backgroundUnhider.className = 'hidden';
			fightScreen.style.display = 'none';
			setTimeout(function() {
				backgroundUnhider.className = 'unhidden';
			}, 1)
		}, 2000);
	}
	//Waits a moment, then takes some HP from player.
	ranNumZombieOne = Math.floor((Math.random() * 10) + 10);
	setTimeout(function() {
		playerHp = playerHp - ranNumZombieOne;
		document.getElementById('player-hp').innerHTML = '<h3 id="playerhp"><b>Your HP :  </b>' + playerHp + '</h3>';
		document.getElementById('fight-screen').classList.add('overlay');
		//Makes a flash of red on the fight screen.
		setTimeout(function() {
			document.getElementById('fight-screen').classList.remove('overlay');
	}, 50);
	},1000);
	
}
