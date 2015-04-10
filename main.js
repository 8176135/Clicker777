// Dat point
var points = 0;

//Buildings
var cursors = {amount:0, power:1};

$(document).ready(function(e) {
    $("button#whyPlay").click(function(){
		$("#whyPlayInfo").slideToggle(1000);
	});
});

window.setInterval(function(){
	pointsClick(cursors.amount * cursors.power);
}, 1000);

function mouseOverButton(buttonID){
	document.getElementById(buttonID).style.backgroundColor = "#DDDDDD";
}
function mouseExitButton(buttonID){
	document.getElementById(buttonID).style.backgroundColor = "#BBBBBB";
}
function mouseDownButton(buttonID){
	document.getElementById(buttonID).style.backgroundColor = "#888888";
}

function pointsClick(number){
	points += number;
	document.getElementById("pointsDisplay").innerHTML = points;
}

function buyCursor(){
	var cursorCost = Math.round(10 * Math.pow(1.15, cursors.amount));
	if(points >= cursorCost){
		cursors.amount += 1;
		points -= cursorCost;6
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
	//console.log("works");
	//console.log(saveGame)
	if (typeof saveGame.points !== "undefined") points = saveGame.points;
	if (typeof saveGame.cursors !== "undefined") cursors.amount = saveGame.cursors;
	
	
	document.getElementById("cursorDisplay").innerHTML = cursors.amount;
	document.getElementById("pointsDisplay").innerHTML = points;
	document.getElementById("cursorCostDisplay").innerHTML = nextCost;
}