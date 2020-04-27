    // Name:   WenFeng Lin
    // Number: 17326032
    // Date:   2019-11-16
    
window.onload = function() {
	
	set_table_sortable('todo');
	set_table_sortable('staff');

	function set_table_sortable(text) {
		var table = document.getElementById(text);
		var tbody = table.tBodies[0];
		var th = table.getElementsByTagName('th');
		var isAsc = [0,0,0];
		for (var i = th.length - 1; i >= 0; i--) {
			var order = document.createElement('div');
			order.id = 'order';
			th[i].appendChild(order);
			th[i].onclick = function() {
				var arr = [];
				for (var j = tbody.rows.length - 1; j >= 0; j--) {
					arr[j] = tbody.rows[j];
				}

				var index = this.cellIndex;
				arr.sort(function(a,b){
					if (!isAsc[index] || isAsc[index] == 1) {
						return a.cells[index].innerHTML 
						 > b.cells[index].innerHTML;
					}
					else {
						return b.cells[index].innerHTML 
						 > a.cells[index].innerHTML;
					}
				});
				

				for(var j = 0;j < th.length; j++)
				{
					if (th[j] == this) {
						th[j].style.backgroundColor = "#1E90FF";
						var order = th[j].lastChild;
						if (!isAsc[index] || isAsc[index] == 2) {
							order.id = "order-up";
						}
						else order.id = "order-down";
					}
					else {
						th[j].style.backgroundColor = "#00008B"
						var order = th[j].lastChild;
						order.id = 'order';
					}
				}

				for(var j = 0; j < 3; j++) {
					if (j == index) {
						isAsc[j] = 3 - isAsc[j];
					}
					else {
						isAsc[j] = 0;
					}
				}

				for (var j = 0; j < arr.length ; j++) {
					tbody.appendChild(arr[j]);
				}

			}
		}
	}
}