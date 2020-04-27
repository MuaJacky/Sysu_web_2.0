	// Name:	林文锋
	// Number:	17326032
	// Date:	2019/10/17
	
window.onload = function(){
	document.getElementById("input").value = "0";

	document.getElementById("equal").onclick = function(){
		var object = document.getElementById("input");
		var expreesion = object.value;

		try{
			object.value = eval(expreesion);
		}
		catch(error){
			alert("Illegal Expreesion!\n");
		}
	}

	var button_add = document.getElementsByClassName("add");
	for (var i = button_add.length - 1; i >= 0; i--) {
		button_add[i].onclick = function() {
			var object = document.getElementById("input");
			if (object.value == "0") {
				object.value = this.innerText;
			}
			else {
				object.value += this.innerText;
			}
		}
	}

	document.getElementById("clear").onclick = function(){
		document.getElementById("input").value = "0";
	}

	document.getElementById("delete").onclick = function() {
		var object = document.getElementById("input");
		var object_text = object.value;
		if (object_text.length == 1) {
			object.value = "0";
		}
		else {
			object.value = object_text.substring(0,object_text.length-1);
		}
	}
}