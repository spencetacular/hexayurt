// var dropDown = document.getElementById("drop");

// function myFunction(){
// 	var d;
// 	var width = 1.0;
// 	d = 1.0;
// 	document.getElementById("demo").innerHTML = (width * Math.tan(0.858)).toString();
// }

// dropDown.onChange = function(){
// 	var selectedNumber = dropDown.options[dropDown.selectedIndex].value;
// 	document.getElementById("demo").innerHTML = selectedNumber.toString();
// }

//http://stackoverflow.com/questions/9062628/how-to-get-dropdown-selected-value-on-client-side-onchange-event

// var d2;
var width = 1.0;

function calculateDist(){
	var d2 = (width * Math.tan(0.524));
	console.log("d2: " + d2);
	document.getElementById("d2").innerHTML = "= " + d2.toFixed(2).toString() +  "\"";

	var d3 = (width * Math.tan(1.0472));
	console.log("d3: " + d3);
	document.getElementById("d3").innerHTML = "= " + d3.toFixed(2).toString() +  "\"";
}