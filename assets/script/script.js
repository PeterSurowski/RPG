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
	$('#instructions').toggleClass('hidden');
	setTimeout(function() {
		$('#instructions').hide();
		$('#first-zombie').removeClass('unhidden');
		$('#second-zombie').removeClass('unhidden');
		$('#third-zombie').removeClass('unhidden');
		$('#choose').removeClass('unhidden');
		$('#first-zombie').addClass('unhidden');
		$('#second-zombie').addClass('unhidden');
		$('#third-zombie').addClass('unhidden');
		$('#choose').addClass('unhidden');
	}, 2000);
}

function zombieImgAdderOne() {
	$('#opponent-pic').html('<img src="assets/images/zombie-one-cropped-243X355.png">');
	$('#opponent-info').html('<p id="description"><b>Description:</b> He was probably once a strong man, but he died long ago and decay has somewhat weakened him. Take him down, but be careful.</p><p id="difficulty"><b>Difficulty:</b> Medium</p>');
	$('#opponent-hp').html('<h3 id="hp"><b>Enemy HP :  </b>' + opponentOneHp + '</h3>');
	$('#player-hp').html('<h3 id="playerhp"><b>Your HP :  </b>' + playerHp + '</h3>');
}

function zombieImgAdderTwo() {
	$('#opponent-pic').html('<img src="assets/images/zombie-two-355X464.png">');
	$('#opponent-info').html('<p id="description"><b>Description:</b> Somehow his dead eyes seem to seeth with anger. He is strong and fast, but the strength of his attacks is erratic.</p><p id="difficulty"><b>Difficulty:</b> Hard</p>');
	$('#opponent-hp').html('<h3 id="hp"><b>Enemy HP :  </b>' + opponentTwoHp + '</h3>');
	$('#player-hp').html('<h3 id="playerhp"><b>Your HP :  </b>' + playerHp + '</h3>');
}

function zombieImgAdderThree() {
	$('#opponent-pic').html('<img src="assets/images/zombie-three-214X355.png">');
	$('#opponent-info').html('<p id="description"><b>Description:</b> He has not been dead for long, but he is missing an arm. Dispatch him quickly.</p><p id="difficulty"><b>Difficulty:</b> Easy</p>');
	$('#opponent-hp').html('<h3 id="hp"><b>Enemy HP :  </b>' + opponentThreeHp + '</h3>');
	$('#player-hp').html('<h3 id="playerhp"><b>Your HP :  </b>' + playerHp + '</h3>');
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
	$('#background').addClass('background-fade background-mover');
	//Reveals fight screen.
	setTimeout(function() {
		$('#background').hide();
		$('#fight-screen').toggleClass('unhidden');
	}, 1000);
}

function fightButton() {
	//Disables attack button after being clicked(reenabled later in function).
	$('#attack').prop('disabled', true);
	$('#opponent-pic').addClass('overlay');
	//Puts a flash of red behind opponent-pic.
	setTimeout(function() {
		$('#opponent-pic').removeClass('overlay');
	}, 50);
	//Takes some HP from opponent.
	ranNumPlayer = Math.floor((Math.random() * 10) + 10);
	currentOpponent = currentOpponent - ranNumPlayer;
	$('#opponent-hp').html('<h3 id="hp"><b>Enemy HP :  </b>' + currentOpponent + '</h3>');
	//If opponent HP reaches 0, return to "choose" screen.
	if (currentOpponent <= 0) {
		//Sets opponent HP to 0.
		$('#opponent-hp').html('<h3 id="hp"><b>Enemy HP :  0</b></h3>');
		//Triggers animation to move fight screen down and fade away.
		$('#fight-screen').toggleClass('unhidden hidden');
		$('#fight-screen').addClass('background-fade background-mover');
		//If you've clicked three zombies at this point it ends the game in a you-win screen.
		if (zombiesClicked.length >= 3) {
			//display = 'none' the game-over screen, which would otherwise interfere with presentation.
			$('#game-over').hide();
			//This is to prevent the background div from reappearing.
			$('#background').hide();
			//Wait for the fight-screen animation and fade out to finish, then display 'none' it.
			setTimeout(function() {
				$('#fight-screen').show();
				$('#you-win').show();
			}, 2050);
				//Then wait for all the above stuff to finish and unhide you-win and you-win-pic.
			setTimeout(function() {
				$('#you-win').toggleClass('unhidden');
				$('#you-win-pic').toggleClass('unhidden');
			}, 2100);	
			//This ends the game.
			return;		
		}		
		//Causes choose screen to change states to visible after the attack screen goes away.
		setTimeout(function() {
			$('#background').show();
			$('#background').removeClass('background-fade background-mover hidden').toggleClass('unhidden');
			$('#fight-screen').hide();
			//Makes defeated opponent disappear from choose screen. (setTimeout is a bug fix.)
			setTimeout(function() {
				$('#background').toggleClass('unhidden');
				if (zombiesClicked[0] === '1' || zombiesClicked[1] === '1' || zombiesClicked[2] === '1') {
					$('#first-zombie').css('visibility', 'hidden');
				}
				if (zombiesClicked[0] === '2' || zombiesClicked[1] === '2' || zombiesClicked[2] === '2') {
					$('#second-zombie').css('visibility', 'hidden');
				}
				if (zombiesClicked[0] === '3' || zombiesClicked[1] === '3' || zombiesClicked[2] === '3') {
					$('#third-zombie').css('visibility', 'hidden');
				}
			}, 5)
			//Removes background-fade and background-mover classes from fight-screen.
			$('#fight-screen').removeClass('background-fade background-mover');
			//Replaces unhidden class to background element.
			$('#background').addClass('unhidden');
			//Reactivates attack button so it will be ready in the next fight.
			$('#attack').prop('disabled', false);
		}, 2000);
		return;
	}
	//Waits a moment, then takes some HP from player.
	ranNumZombieOne = Math.floor((Math.random() * currentAttackPower[0]) + currentAttackPower[1]);
	setTimeout(function() {
		//Reactivates attack button
		$('#attack').prop('disabled', false);	
		playerHp = playerHp - ranNumZombieOne;
		$('#player-hp').html('<h3 id="playerhp"><b>Your HP :  </b>' + playerHp + '</h3>');
		$('#fight-screen').addClass('overlay');
		//Makes a flash of red on the fight screen.
		setTimeout(function() {		
			$('#fight-screen').removeClass('overlay');
		}, 50);
		//If zombies take down your HP...
		if (playerHp <= 0) {
			//Sets your HP to 0.
			$('#player-hp').html('<h3 id="hp"><b>Your HP :  0</b></h3>');
			//Waits a moment, then triggers animation to move fight screen down.
			setTimeout(function() {
				$('#fight-screen').toggleClass('background-fade background-mover');
				//Sets game over screen's display to block instead of none.
				$('#game-over').show();
				//Waits about two secs, then shows game over screen.
				setTimeout(function() {					
					$('#game-over').addClass('unhidden');
					$('#fight-screen', '#choose', '#background').hide();
				}, 2005)
			}, 1000);
		}
	}, 1000);
}
