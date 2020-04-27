
    // Name:   WenFeng Lin
    // Number: 17326032
    // Date:   2019-11-16
    // Tips:   After watching the code written by 'Steven He', i think what I've written is garbage.

$(window).load(function (){
	$('table th').click(sort);

	function sort(event) {
		var target = $(event.target);	// get this target
		var table = target.closest('table');	// get parent table
		var th = table.find('th');	
		var sort = target.attr('sort');	// get this sort
		th.removeAttr('sort');	// remove all other sort
		var [attr , order] = sort === 'asc' ? ['desc' , -1] : ['asc' , 1];
		target.attr({ sort: attr });	//	update sort

		var tbody = table.children('tbody');
		var tr = tbody.find('tr');
		var index = target.index();	// get column
        tr.sort(function (a, b) {
            let textA = $(a).children("td").eq(index).text();
            let textB = $(b).children("td").eq(index).text();
            return textA === textB ? 0 : textA > textB ? order : -order;
        });	//sort by column
		tr.detach().appendTo(tbody);	//update sorted column
	}	
});
