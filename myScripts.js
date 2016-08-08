var dropDown = document.getElementById("drop");

function myFunction(){
	var d;
	var width = 1.0;
	d = 1.0;
	document.getElementById("demo").innerHTML = (width * Math.tan(0.858)).toString();
}

dropDown.onChange = function(){
	var selectedNumber = dropDown.options[dropDown.selectedIndex].value;
	document.getElementById("demo").innerHTML = selectedNumber.toString();
}