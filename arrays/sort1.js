var myArray = [1, 2, 10, 20, 100, 200];
console.log(myArray);

myArray.sort();
console.log(myArray); // => {1, 10, 100, 2, 20, 200}

function sortNumbers(a, b) {
  return a - b;
}
myArray.sort(sortNumbers);
console.log(myArray);

