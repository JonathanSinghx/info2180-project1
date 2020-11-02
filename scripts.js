/* Add your JavaScript to this file */
/*window.unload = function(){*/
document.addEventListener("DOMContentLoaded",function(){
	var subscriber = document.getElementsByTagName("button")[0];
	var email = document.getElementById("email");
	var message= document.getElementsByClassName("message")[0];

	subscriber.addEventListener("click", function(e){
		e.preventDefault();
		console.log("Button pressed");

		if (email.value== ""){
			message.innerHTML = "Please enter valid email address.";
		}else{
			message.innerHTML = `Thank you! Your email address ${email.value} has been added to our mailing list!`;
		}
	});
});
