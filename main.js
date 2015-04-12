// Dat point
var points = 0;

//Buildings
var cursors = {amount:0, power:1, baseCost:10};
var cursorCost = Math.round(cursors.baseCost * Math.pow(1.15, cursors.amount));

var Item = {amount:0, power:5, baseCost:60};
var ItemCost =  Math.round(Item.baseCost * Math.pow(1.15, Item.amount));

$(document).ready(function(e) {
	allDaCheckz();
	$(".buttonUnLit, .button").qtip({
		position:{
			my: 'center left',
			at: 'center right'
		},
		style: {classes: 'toolTipStyles qtip-dark qtip-rounded qtip-shadow'},
		show: {
            effect: function() {
                $(this).fadeIn(150);
            }
        },
        hide: {
            effect: function() {
                $(this).fadeOut(150);
            }
        },
	});
	
    $("button#whyPlay").click(function(){
		$("#whyPlayInfo").slideToggle(1000);
	});
});

window.setInterval(function(){
	pointsClick(cursors.amount * cursors.power);
}, 1000);

function pointsClick(number){
	points += number;
	document.getElementById("pointsDisplay").innerHTML = points;
	allDaCheckz();
}

function buyItem(cost, object, display){
	if(points >= cost){
		object.amount += 1;
		points -= cost;
		document.getElementById("pointsDisplay").innerHTML = points;
		allDaCheckz();
	};
	cost = Math.round(cursors.baseCost * Math.pow(1.15, object.amount));
	document.getElementById(display).innerHTML = cost;
	return cost;
}

//BuyBuildins
function buyCursor(){
	cursorCost = buyItem(cursorCost,cursors,"cursorCostDisplay");	
}

function allDaCheckz(){
	
	if(points >= cursorCost){
		$("#buyCursorBtn").addClass("button");
		$("#buyCursorBtn").removeClass("buttonUnLit");
	} 
	else{
		$("#buyCursorBtn").addClass("buttonUnLit");
		$("#buyCursorBtn").removeClass("button");
	}
	
	$("#buyCursorBtn").attr("title","Currently have: " + cursors.amount);
	
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