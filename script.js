function addNumbers(){
	var a = +document.getElementById("x1").value;
  var b = +document.getElementById("x2").value;
  var h = +document.getElementById("x3").value;
	var output = (a + b)/2 * h
	document.getElementById("td").innerHTML = output;
}