
	// Name:	林文锋
	// Number:	17326032
	// Date:	2019/11/13
	// LoC :   	43 lines before, 25 lines after.

$(document).ready(function(){
			$("#input").val("0");

			$("#equal").click(function(){
				try {
					$("#input").val(eval($("#input").val()));
				} 
				catch (error) {
					alert("Illegal Expreesion!\n");
				}
			});

			$(".add").each(function() {
				$(this).click(function() {
					$("#input").val($("#input").val() == "0" ? $(this).text() : $("#input").val() + $(this).text());
				});
			});

			$("#clear").click(function(){
				$("#input").val("0");
			});

			$("#delete").click(function() {
				$("#input").val($("#input").val().length == 1 ? "0" : $("#input").val().substring(0,$("#input").val().length-1));
			});
		});