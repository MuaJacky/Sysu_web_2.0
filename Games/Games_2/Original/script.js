
	// Name:	林文锋
	// Number:	17326032
	// Date:	2019/10/24


var time = 31;
var scores = 0;
var state = false;
var before = false;
var best = 0;
window.onload = function() {
	var map = document.getElementById("moles_map");
	for (var i = 0; i < 60; i++) {
		var radio = document.createElement("input");
		radio.setAttribute("type","radio");
		radio.className = "mole";
		radio.addEventListener("mouseover",overcheck);
		radio.addEventListener("click",hit);
		map.appendChild(radio);
	}

	show("Click game button to start");

	var moles = document.getElementsByClassName("mole");

	var time_keeper = document.getElementById("time-keeper");
	time_keeper.value = "0";

	var score_keeper = document.getElementById("score-keeper");
	score_keeper.value = "0/0";

	var game_button = document.getElementById("game-button");
	game_button.onclick = function() {
		if (state) {
			state = false;
			show("Game Over");
			end_game();
		}
		else {
			state = true;
			time = 31;
			scores = 0;
			show("Game Start");
			start_game();
		}
	}
}

function overcheck(event)
{
	before = this.checked;
}

function hit(event)
{
	if (state) {
		if (before == this.checked) {
			before = false;
			this.checked = false;
			get_mole();
			scores ++;
			show("Hit! score + 1!");
		}
		else {
			scores --;
			this.checked = false;
			show("Miss.. score -1..");
		}
		
		if (scores > best) {best = scores;}
		var score_keeper = document.getElementById("score-keeper");
		score_keeper.value = scores + '/' + best;
	}
	else this.checked = false;
}

function start_game()
{
	get_mole();
	var score_keeper = document.getElementById("score-keeper");
	score_keeper.value = scores + '/' + best;
	timer();
}

function end_game()
{
	var moles = document.getElementsByClassName("mole");
	for (var i = moles.length - 1; i >= 0; i--) {
		if(moles[i].checked) {moles[i].checked = false;}
	}
	var time_keeper = document.getElementById("time-keeper");
	time_keeper.value = "0";
	show("Game Over");
}

function timer()
{
	if (time && state) {
		time --;
		var time_keeper = document.getElementById("time-keeper");
		time_keeper.value = time;
		var get_time = setTimeout(timer,1000);
	}
	else {
		state = false;
		clearTimeout(get_time);
		end_game();
	}
}

function get_mole()
{
	if (state) {
		var i = Math.floor(Math.random() * 60);
		var moles = document.getElementsByClassName("mole");
		moles[i].checked = true;
	}
}

function show(text){
	var Hint = document.getElementById("Hint");
	Hint.value = text;
}


