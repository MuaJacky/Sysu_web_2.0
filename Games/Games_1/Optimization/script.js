
	// Name:	林文锋
	// Number:	17326032
	// Date:	2019/11/13
	// Loc:     82 lines before, 51 lines after.

var game_start = false;
var inside_walls = false;
$(document).ready( function() {
	$("#S-block").mouseover(function() {
		game_start = true;
		game_end = false;
		inside_walls = true;
		show("Game start.");
	});

	$("#upper-wall").mouseover(function strike_upwall() {
		if (game_start) {
			game_start = false;
			$("#upper-wall").css({"background-color":"red"});
			show("You lose.");
			setTimeout(function() {
				$("#upper-wall").css({"background-color":"grey"});
			},1000);
		}
	});
	
	$("#down-wall").mouseover(function strike_downwall() {
		if (game_start) {
			game_start = false;
			$("#down-wall").css({"background-color" : "red"});
			show("You lose.");
			setTimeout(function() {
				$("#down-wall").css({"background-color" : "grey"});	
			},1000);
		}
	});

	$("#E-block").mouseover(function end(){
		show(game_start && inside_walls ? "You win!" : 
			"Don't cheat,you should start from the 'S' and move to the 'E' inside the maze.");
		game_start = false;
	});

	$("#cheat-wall-left").mouseout(function cheat_judge() {
		inside_walls = false;
	});

	function show(text) {
		$("#result-showing").text(text);
		$("#result-showing").css({"opacity" : 1});
		setTimeout(function() {
			$("#result-showing").css({"opacity" : 0});
		},2000);
	}	
});