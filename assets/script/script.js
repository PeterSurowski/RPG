function instructionsHider() {
	var instructionsHider = document.getElementById('instructions');
	instructionsHider.style.display = "none";
	var zombiesAppear = document.getElementById('first-zombie');
	zombiesAppear.className = 'unhidden';
	var chooseAppears = document.getElementById('choose');
	chooseAppears.className = 'unhidden';
}