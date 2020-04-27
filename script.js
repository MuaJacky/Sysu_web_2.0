window.onload = function() {
	var event_1 = setInterval(set1,3000);
}

function set1(){
	setTimeout(set2,0);
	setTimeout(set3,1000);
	setTimeout(set4,2000);
}

function set2(){
	var Node = document.getElementsByTagName("li")[0];
	Node.style.color = "red";
	var Node2 = document.getElementsByTagName("li")[2];
	Node2.style.color = "black";
}

function set3(){
	var Node = document.getElementsByTagName("li")[1];
	Node.style.color = "red";
	var Node2 = document.getElementsByTagName("li")[0];
	Node2.style.color = "black";
}

function set4(){
	var Node = document.getElementsByTagName("li")[2];
	Node.style.color = "red";
	var Node2 = document.getElementsByTagName("li")[1];
	Node2.style.color = "black";
}