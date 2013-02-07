"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calcular() {
  var resultado;
  var original = document.getElementById("original");
  var temporal = original.value;
  var regexp = /^(-|+)?\d+(.\d+)?º(f|F|C|c)$/g;
  
  var m = temp.match(regexp);
  
  if (m) {
    var num = m[0].match(/^(-|+)?\d+(.\d+)?/);
    var type = m[0].match(/f|F|C|c/);
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      result = (num * 9/5)+32;
      result = result + 'F';
    }
    else {
      result = (num - 32)*5/9;
      result = result + 'C';
    }
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "ERROR al introducir la temperatura. Temperatura no válida";
  }
}