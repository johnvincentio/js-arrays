
function myFunc1() {
  console.log(myString);
}

function myFunc2() {
  console.log(myString);
  var myString = 'foo';
}

myFunc2();
myFunc1();
