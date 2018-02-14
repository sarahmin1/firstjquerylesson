// Add in external javascript file

$(document).ready(function () { //checks if html is fully loaded

	$('#btn-img-1').prop('disabled', true); //existing img button disabled

	//when button with an id is clicked
	$('#btn-img-2').on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior
		$('#aids-img').attr('src', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/153746/mending.jpg'); //Replace URL attribute for #aids-img
		$('#btn-img-2').prop('disabled', true); //disable Image 2 button
		$('#btn-img-1').prop('disabled', false); // enable Image 1 button
	}); //end of attributes function


	//when button with an id btn-img-1 is clicked
	$('#btn-img-1').on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior
		$('#aids-img').attr('src', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/153746/baby_light.jpg'); //show image with #bath-img id slowly
		$('#btn-img-2').prop('disabled', false); // enable Image 2 button
		$('#btn-img-1').prop('disabled', true); //disable Image 1 button
	}); //end of attributes function


}); //closes all the functions