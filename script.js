function addNumbers () {
let a = +document.getElementById("x1").value;
let b = +document.getElementById("x2").value;
let h = +document.getElementById("x3").value;
let output = (a + b) / 2 * h
document.getElementById("td").innerHTML = output;
}