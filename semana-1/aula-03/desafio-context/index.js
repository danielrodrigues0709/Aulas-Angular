let calc = function() {
  return {
    sum: this.sum,
    mult: this.mult,
    div: this.div,
  }
}

let methods = {
  sum: function(x, y) {
    return x + y;
  },
  mult: function(x, y) {
    return x * y;
  },
  div: function(x, y) {
    return x / y;
  }
}
calcBound = calc.bind(methods);

console.log(calcBound().sum(2,2)); // => 4
console.log(calcBound().mult(2,3)); // => 6
console.log(calcBound().div(6,3)); // => 2

// Neste exemplo foi utilizado o higher-order function onde são passadas funções como parâmetros para o contexto this, sendo estes os métodos sum, mult e div.