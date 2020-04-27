
	// Name:	林文锋
	// Number:	17326032
	// Date:	2019/11/14
	// Loc:     118 lines before, 103 lines after.

var time = 31;
var scores = 0;
var state = false;
var before = false;
var best = 0;
$(document).ready( function() {
	_.times(60, function() {
		var radio = document.createElement("input");
		radio.setAttribute("type","radio");
		radio.className = "mole";
		radio.addEventListener("mouseover",function overcheck(event) {
				before = this.checked;
		});
		radio.addEventListener("click",hit);
		$("#moles_map").append(radio);
	});

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
			
			best = scores > best ? scores : best;
			$("#score-keeper").val(scores + '/' + best);
		}
		else this.checked = false;
	}

	show("Click game button to start");

	$("#time-keeper").value = "0";

	$("#score-keeper").value = "0/0";

	$("#game-button").click(function() {
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
	});

	function start_game()
	{
		get_mole();
		$("#score-keeper").val(scores + '/' + best);
		timer();
	}

	function end_game()
	{
		$(".mole").each(function() {
			$(this).checked = false;
		})
		$("#time-keeper").val("0");
		show("Game Over");
	}

	function timer()
	{
		if (time && state) {
			time --;
			$("#time-keeper").val(time);
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
		$("#Hint").val(text);
	}
});



