function instructionsHider() {
	var instructionsHider = document.getElementById('instructions');
	instructionsHider.style.display = "none";
	var firstAppears = document.getElementById('first-zombie');
	firstAppears.className = 'unhidden';
	var secondAppears = document.getElementById('second-zombie');
	secondAppears.className = 'unhidden';
	var thirdAppears = document.getElementById('third-zombie');
	thirdAppears.className = 'unhidden';
	var chooseAppears = document.getElementById('choose');
	chooseAppears.className = 'unhidden';
}

function fightZombie() {
	var backgroundChanger = document.getElementById('background');
	backgroundChanger.className = 'background-fade background-mover';
	setTimeout(function() {
		backgroundChanger.style.display = 'none';
	}, 2000);
}