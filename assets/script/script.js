var opponentChosen;

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
	document.getElementById('opponent-info').innerHTML = '<p id="description"><b>Description:</b> He looks as though he were once a strong man, but he has been dead for a long time and decay has somewhat weakened him. Take him down, but be careful.</p><p id="difficulty"><b>Difficulty:</b> Medium</p>';
}

function zombieImgAdderTwo() {
	document.getElementById('opponent-pic').innerHTML = '<img src="assets/images/zombie-two-355X464.png">';
	document.getElementById('opponent-info').innerHTML = '<p id="description"><b>Description:</b> Somehow his dead eyes seem to seeth with anger. He is strong and fast, but the strength of his attacks is erratic.</p><p id="difficulty"><b>Difficulty:</b> Hard</p>';
}

function zombieImgAdderThree() {
	document.getElementById('opponent-pic').innerHTML = '<img src="assets/images/zombie-three-214X355.png">';
	document.getElementById('opponent-info').innerHTML = '<p id="description"><b>Description:</b> He has not been dead for long, but he is missing an arm. Dispatch him quickly.</p><p id="difficulty"><b>Difficulty:</b> Easy</p>';
}

function fightZombie() {
	var backgroundChanger = document.getElementById('background');
	backgroundChanger.className = 'background-fade background-mover';
	setTimeout(function() {
		backgroundChanger.style.display = 'none';
		var fightScreen = document.getElementById('fight-screen');
		fightScreen.style.display = 'block';
		fightScreen.className = 'unhidden';
	}, 2000);
}


