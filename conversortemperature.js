"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calcular() {
  var resultado;
  var original = document.getElementById("original");
  var temporal = original.value;
  var regexp = /^-?\d+(.\d+)?(f|F|C|c)$/g;
  
  var m = temporal.match(regexp);
  
  if (m) {
    var num = m[0].match(/^-?\d+(.\d+)?/);
    var type = m[0].match(/f|F|C|c/);
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      resultado = (num * 9/5)+32;
      resultado = resultado.toFixed(2);
      resultado = resultado + 'F';
    }
    else {
      resultado = (num - 32)*5/9;
      resultado = resultado.toFixed(2);
      resultado = resultado + 'C';
    }
    converted.innerHTML = resultado;
  }
  else {
    converted.innerHTML = "ERROR al introducir la temperatura. Temperatura no valida";
  }
}