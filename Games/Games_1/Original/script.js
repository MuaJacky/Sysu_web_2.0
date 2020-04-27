
	// Name:	林文锋
	// Number:	17326032
	// Date:	2019/10/24

var game_start = false;
var game_end = false;
var inside_walls = true;
window.onload = function() {
	var start_game = document.getElementById("S-block");
	start_game.onmouseover = function() {
			game_start = true;
			game_end = false;
			inside_walls = true;
			show("Game start.");
		}

	var up_wall = document.getElementById("upper-wall");
	up_wall.addEventListener("mouseover",strike_upwall);
	
	var down_wall = document.getElementById("down-wall");
	down_wall.addEventListener("mouseover",strike_downwall);

	var end_game = document.getElementById("E-block");
	end_game.addEventListener("mouseover",end);
	
	var cheat = document.getElementById("cheat-wall-left");
	// cheat.addEventListener("mouseover",cheat_warning);
	cheat.addEventListener("mouseout",cheat_judge);


	// var cheat_1 = document.getElementById("cheat-wall-right");
	// cheat_1.addEventListener("mouseover",cheat_warning);
	// cheat_1.addEventListener("mouseout",cheat_judge);


	function strike_upwall() {
		
		if (game_start) {
			game_start = false;
			var get_wall = document.getElementById("upper-wall");
			get_wall.style.backgroundColor = "red";
			show("You lose.");
			setTimeout(function() {
				var get_wall = document.getElementById("upper-wall");
				get_wall.style.backgroundColor = "grey";	
			},1000);
		}
		// get_wall.style.opacity = 0;
		// window.setTimeout(function() {
		// 	var get_wall = document.getElementById("upper-wall");
		// 	get_wall.style.color = "grey";
		// },1000);
	}

	function strike_downwall() {
		if (game_start) {
			game_start = false;
			var get_wall = document.getElementById("down-wall");
			get_wall.style.backgroundColor = "red";
			show("You lose.");
			setTimeout(function() {
				var get_wall = document.getElementById("down-wall");
				get_wall.style.backgroundColor = "grey";	
			},1000);
		}
		// var int = window.setTimeout(function() {
		// 	var get_wall = document.getElementById("down-wall");
		// 	get_wall.style.color = "grey";
		// },1000);
	}

	function end(){
		game_end = true;
		if (game_start) {
			if (inside_walls) {
				show("You win!");
			}
			else show("Don't cheat,you should start from the 'S' and move to the 'E' inside the maze.");
		}
		else show("Don't cheat,you should start from the 'S' and move to the 'E' inside the maze.");
		game_start = false;
		game_end = false;
		inside_walls = true;
		// show("over e-block");	
	}

	function show(text) {
		var showing = document.getElementById("result-showing");
		showing.innerText = text;
		showing.style.opacity = 1;
		var int = window.setTimeout(function() {
			var showing = document.getElementById("result-showing");
			showing.style.opacity = 0;
		},5000);
	}

	// function cheat_warning() {
	// 	if (game_start) {
	// 		show("You are outside the maze.please return to the 'S' bolck and restart the game.");
	// 	}
	// }

	function cheat_judge() {
		inside_walls = false;
	}

}
