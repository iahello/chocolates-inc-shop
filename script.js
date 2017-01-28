$(document).ready(function(){

	$(".view1, .view2, .view3, .view4, .view5, .view6, .view7, .view8, .view9").hide();

	$('img').click(function(){
		var checkValue = $(this).attr("value");

		$(".view" + checkValue).toggle(300); 	
	});

var total = 0;
var boxValue = 0;

	$("input[type=checkbox]").change(function(){
		boxValue = $(this).val();
	});

	//quantity
	$('.quantity').focusout(function (){
		var getQuantity = $(this).val();
		var numberQuantity = parseInt(getQuantity);

		console.log("quants: " + numberQuantity);
							
		//price
		//var boxValue = $("input[type=checkbox]:checked").val();
		var getPrice = $("#c" + boxValue).attr("price");
		var thisPrice = parseInt(getPrice);
		
		console.log("box number: " + boxValue);
		console.log("price: " + thisPrice);

		//total
		var addTotal = (numberQuantity * thisPrice);
        total += addTotal
		console.log("total: " + total.toLocaleString());

		var showTotal = $('#totalyes');
		showTotal.html("TOTAL: " + "Php " + total + ".00");
		
	});

	$('#submit').click(function() {
		var firstname = $('#firstname').val();
		var lastname = $('#lastname').val();
		var email = $('#email').val();
		var address = $('#address').val();
		var contact = $('#contact').val();
		var summary = $('#summary');

		if (firstname=="" || lastname=="" || email=="" || address=="" || contact==""){
			alert("Please Fill In All The Forms");
		}
		else {
			$('.summary2').html("Thank you for submitting your information, " + firstname + " " + lastname + "<br>"
				+ "Email: " + email + "<br>" 
				+ "Address: " + address + "<br>"
				+ "Contact: " + contact);	
		}
	});	

});	
		