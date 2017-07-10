var opponentOneHp = 30;
var opponentTwoHp = 50;
var opponentThreeHp = 20;
var playerHp = 100;
var ranNumPlayer, ranNumZombieOne, ranNumZombieTwo,ranNumZombieThree;
var zombiesClicked = [];
var currentOpponent;
var currentAttackPower = [];

//Hides the instructions and unhides the opponents and headline above.
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

//Next three funtions add an identifier to the zombiesClicked array.
function zombiesClickedOne() {
	zombiesClicked.push('1');
	console.log(zombiesClicked);
	currentOpponent = opponentOneHp;
	currentAttackPower = [15, 5];
}

function zombiesClickedTwo() {
	zombiesClicked.push('2');
	console.log(zombiesClicked);
	currentOpponent = opponentTwoHp;
	currentAttackPower = [40, 10];
}

function zombiesClickedThree() {
	zombiesClicked.push('3');
	console.log(zombiesClicked);
	currentOpponent = opponentThreeHp;
	currentAttackPower = [10, 10];
}

function fightZombie() {
	//Hides background and animates it down.
	var backgroundChanger = document.getElementById('background');
	backgroundChanger.className = 'background-fade background-mover';
	//Reveals fight screen.
	setTimeout(function() {
		backgroundChanger.style.display = 'none';
		var fightScreen = document.getElementById('fight-screen');
		fightScreen.className = 'unhidden';
	}, 1000);
}

function fightButton() {
	//Disables attack button after being clicked(reenabled later in function).
	document.getElementById('attack').disabled = true;
	//Puts a flash of red behind opponent-pic.
	document.getElementById('opponent-pic').classList.add('overlay');
	setTimeout(function() {
		document.getElementById('opponent-pic').classList.remove('overlay');
	}, 50);
	//Takes some HP from opponent.
	ranNumPlayer = Math.floor((Math.random() * 10) + 10);
	currentOpponent = currentOpponent - ranNumPlayer;
	document.getElementById('opponent-hp').innerHTML = '<h3 id="hp"><b>Enemy HP :  </b>' + currentOpponent + '</h3>';
	//If opponent HP reaches 0, return to "choose" screen.
	if (currentOpponent <= 0) {
		//Sets opponent HP to 0.
		document.getElementById('opponent-hp').innerHTML = '<h3 id="hp"><b>Enemy HP :  0</b></h3>';
		//Triggers animation to move fight screen down and fade away.
		var fightScreen = document.getElementById('fight-screen');
		fightScreen.className = 'background-fade background-mover';
		//If you've clicked three zombies at this point...
		if (zombiesClicked.length >= 3) {
			//display = 'none' the game-over screen, which would otherwise interfere with presentation.
			document.getElementById('game-over').style.display = 'none';
			//This is to prevent the background div from reappearing.
			document.getElementById('background').style.display = 'none';
			//Wait for the fight-screen animation and fade out to finish, then display 'none' it.
			setTimeout(function() {
				document.getElementById('fight-screen').style.display = 'none';
				document.getElementById('you-win').style.display = 'block';
			}, 2050);
				//Then wait for all the above stuff to finish and unhide you-win and you-win-pic.
			setTimeout(function() {
				document.getElementById('you-win').className = 'unhidden';
				document.getElementById('you-win-pic').className = 'unhidden';
			}, 2100);	
			//This ends the game.
			return;		
		}		
		//Causes choose screen to change states to visible after the attack screen goes away.
		setTimeout(function() {
			var backgroundUnhider = document.getElementById('background');
			backgroundUnhider.style.display = 'block';
			backgroundUnhider.className = 'hidden';
			//Makes defeated opponent disappear from choose screen. (setTimeout is a bug fix.)
			setTimeout(function() {
				backgroundUnhider.className = 'unhidden';
				if (zombiesClicked[0] === '1' || zombiesClicked[1] === '1' || zombiesClicked[2] === '1') {
					var zombieInvisible = document.getElementById('first-zombie');
					zombieInvisible.style.visibility = 'hidden';
				}
				if (zombiesClicked[0] === '2' || zombiesClicked[1] === '2' || zombiesClicked[2] === '2') {
					var zombieInvisible = document.getElementById('second-zombie');
					zombieInvisible.style.visibility = 'hidden';
				}
				if (zombiesClicked[0] === '3' || zombiesClicked[1] === '3' || zombiesClicked[2] === '3') {
					var zombieInvisible = document.getElementById('third-zombie');
					zombieInvisible.style.visibility = 'hidden';
				}
			}, 5)
			//Reactivates attack button so it will be ready in the next fight.
			document.getElementById('attack').disabled = false;
		}, 2000);
		return;
	}
	//Waits a moment, then takes some HP from player.
	ranNumZombieOne = Math.floor((Math.random() * currentAttackPower[0]) + currentAttackPower[1]);
	setTimeout(function() {
		//Reactivates attack button
		document.getElementById('attack').disabled = false;	
		playerHp = playerHp - ranNumZombieOne;
		document.getElementById('player-hp').innerHTML = '<h3 id="playerhp"><b>Your HP :  </b>' + playerHp + '</h3>';		
		document.getElementById('fight-screen').classList.add('overlay');
		//Makes a flash of red on the fight screen.
		setTimeout(function() {		
			document.getElementById('fight-screen').classList.remove('overlay');
		}, 50);
		//If zombies take down your HP...
		if (playerHp <= 0) {
			//Sets your HP to 0.
			document.getElementById('player-hp').innerHTML = '<h3 id="hp"><b>Your HP :  0</b></h3>';
			//Waits a moment, then triggers animation to move fight screen down.
			setTimeout(function() {
				var fightScreen = document.getElementById('fight-screen');
				fightScreen.className = 'background-fade background-mover';
				//Sets game over screen's display to block instead of none.
				document.getElementById('game-over').style.display = 'block';
				//Waits about two secs, then shows game over screen.
				setTimeout(function() {					
					document.getElementById('game-over').className = 'unhidden';
					document.getElementById('fight-screen', 'choose', 'background').style.display = 'none';
				}, 2005)
			}, 1000);
		}
	}, 1000);
}
