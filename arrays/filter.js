
function isEven(num) {
  return num % 2 === 0;
}

var myNumbers = [1, 2, 3, 4, 5, 6];
console.log(myNumbers); // => [2, 4, 6]

var evens = myNumbers.filter(isEven);
console.log(evens); // => [2, 4, 6]

