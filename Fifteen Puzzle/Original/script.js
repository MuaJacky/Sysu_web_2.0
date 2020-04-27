
	// Name:		林文锋 	LinWenFeng
	// Number: 	17326032
	// Date:		2019-11-09

	// This is the javascript sheet of Puzzle.html


(function () {
	var time = 0;
	var step = 0;
	var distance_x = 85;
	var distance_y = 88;
	var game_status = 0;

	var map = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

	window.onload = function() {
		getMap();

		var start_game_button = document.getElementById("start-game");
		start_game_button.onclick = start_game;

		var time_keeper = document.getElementById("time-counter");
		time_keeper.value = "0s";
		var step_keeper = document.getElementById("steps-counter");		
		step_keeper.value = "0";

		var end_game_button = document.getElementById("end-game");
		end_game_button.onclick = end_game;

		var cheat_button_1 = document.getElementById("Golden-finger-1");
		cheat_button_1.onclick = simple_mode;

		var cheat_button_2 = document.getElementById("Golden-finger-2");
		cheat_button_2.onclick = show_photo;
	}

	function start_game() {
		game_status = 1;

		randomSortMap();
	
		var id = window.setInterval(function() {
			if (game_status) {
				time ++;
				// alert(time);
				var time_keeper = document.getElementById("time-counter");
				time_keeper.value = time + "s";
			}
		},1000);
	}

	function getMap() {
		var puzzle = document.getElementById("puzzle-container");
		// alert(puzzle.childNodes.length);
		// for(var i = 0;i < puzzle.childNodes.length; i++)
		// {
		// 	puzzle.removeChild(puzzle.childNodes[0]);
		// }
		var last;
		while((last = puzzle.lastChild))
			puzzle.removeChild(last);
		// alert(puzzle.hasChildNodes());
		for(var a = 0; a < 16; a++) {
			var part = document.createElement("div");
			part.id = "puzzle-id-" + a;
			part.addEventListener("click",move);
			puzzle.appendChild(part);
			
		}		
	}

	function move(event) {
		if (!game_status) {
			return;
		}

		var blank = document.getElementById("puzzle-id-15");
		var blank_left = blank.offsetLeft;

		var blank_top = blank.offsetTop;
		var this_left = this.offsetLeft;

		var this_top = this.offsetTop;

		// 537 - 90 =  447 - 89 = 358 
		// 626-537 = 89
		// 822-736 = 86
		//左右相邻
		//上下相邻
		var offsetX = Math.abs(Math.abs(this_left - blank_left) - distance_x);
		// alert(offsetX);
		var offsetY = Math.abs(Math.abs(this_top - blank_top) - distance_y);
		// alert(offsetY);
		if ((offsetX < 5 && this_top == blank_top)
		  ||(offsetY < 5 && this_left == blank_left) ) 
		{
			var temp = blank.id;
			blank.id = this.id;
			this.id = temp;

			step ++;
			var step_keeper = document.getElementById("steps-counter");		
			step_keeper.value = "" + step;
			// check
			if (checkMap()) {
				end_game();
			}
		}
	}

	function checkMap() {
		var puzzle = document.getElementById("puzzle-container").childNodes;
      	for (var k = 0; k < 16; k++) {
        	if (puzzle[k].id != ("puzzle-id-" + k)) {
        		return false;
        	}
      	}
      	return true;
	}

	function randomSortMap() {
	  function randomSort(a, b) {
      	return Math.random() > 0.5 ? -1 : 1;
      }

      //generate a new map but need verification
      function verify() {
        var less = 0;
        for (var a = 0; a < 16; a++) {
          for (var b = a + 1; b < 16; b++) {
            if (map[b] < map[a])
              less++;
          }
        }
        if (map[15] == 1 || map[15] == 3 || map[15] == 4 || map[15] == 6 || map[15] == 9 || map[15] == 11 || map[15] == 12 || map[15] == 14)
          return (less + 1) % 2 == 0;
        else
          return less % 2 == 0;
      }

      do {
        map.sort(randomSort);
      } while (verify() == false);

    
      var puzzle = document.getElementById("puzzle-container").childNodes;
      for (var k = 0; k < 16; k++) {
        puzzle[k].id = "puzzle-id-" + map[k];
      }
	}

	function end_game() {
		if (!game_status) {
			show("Game is not started.",3000);
			return;
		}

		var puzzle = document.getElementById("puzzle-container").childNodes;
		if (checkMap()) {
			puzzle[15].id = "puzzle-id-16";
			show("You Won !  Your steps is " + step, 3000);
		}	
		else 
		{
			show("You lost !  Your steps is " + step,3000);
			for (var k = 0; k < 16; k++) {
	        	puzzle[k].id = "puzzle-id-" + k;
	      	}
		}		


		game_status = 0;
		time = 0;
		step = 0;
		
		var time_keeper = document.getElementById("time-counter");
		time_keeper.value = "0s";

		var step_keeper = document.getElementById("steps-counter");		
		step_keeper.value = "0";

	}

	function show(text,second) {
		var timing = second;
		var info = document.getElementById("Info");
		info.innerHTML = text;
		info.style.opacity = 1;

		setTimeout(function(){
			var info = document.getElementById("Info");
			info.style.opacity = 0;
		},timing);
	}

	// a function to test check and automatically end_game
	function simple_mode() {
		if (!game_status) {
			return;
		}
		game_status = 1;
		var puzzle = document.getElementById("puzzle-container").childNodes;
		for(var i = 0;i < 16; i ++)
		{
			puzzle[i].id = "puzzle-id-" + i;
		}
		puzzle[14].id = "puzzle-id-15";
		puzzle[15].id = "puzzle-id-14";		
	}

	// a function to show original photo
	function show_photo() {
		if (!game_status) {
			return;
		}
		var photo = document.getElementById("photo-container");
		photo.style.opacity = 1;
		setTimeout(function(){
			var photo = document.getElementById("photo-container");
			photo.style.opacity = 0;
		},3000);
	}
})()