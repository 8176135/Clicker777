// Dat point
var points = 0;

//Buildings
var cursors = {amount:0, power:1};

window.setInterval(function(){
	pointsClick(cursors.amount * cursors.power);
}, 1000);


function pointsClick(number){
	points += number;
	document.getElementById("pointsDisplay").innerHTML = points;
}

function buyCursor(){
	var cursorCost = Math.round(10 * Math.pow(1.15, cursors.amount));
	if(points >= cursorCost){
		cursors.amount += 1;
		points -= cursorCost;
		document.getElementById("cursorDisplay").innerHTML = cursors.amount;
		document.getElementById("pointsDisplay").innerHTML = points;
	};
	var nextCost = Math.round(10 * Math.pow(1.15, cursors.amount));
	document.getElementById("cursorCostDisplay").innerHTML = nextCost;
}



function save(){
	var saveData = {
		points: points,
		cursors: cursors.amount,
	}
	localStorage.setItem("saveData",JSON.stringify(saveData));
}

function load(){
	var saveGame = JSON.parse(localStorage.getItem("saveData"));
	
	if (typeof savegame.points !== "undefined") points = saveGame.points;
	if (typeof savegame.cursors !== "undefined") cursors = saveGame.cursors;
}