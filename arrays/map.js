
function double(num) {
  return 2 * num;
}

var myNumbers = [1, 2, 3, 4];
var doubledNumbers = myNumbers.map(double);
console.log(doubledNumbers); // => [2, 4, 6, 8];

var jv1 = myNumbers.map(function(num) {return num * 2;});
console.log(jv1);
