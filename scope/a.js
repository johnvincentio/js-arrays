
var foo = 'fooo';

function logFoo() {
  var foo = 'barrrrrr';
  console.log('inside this function, `foo` == "' + foo + '"');
}

function newFunc() {
  foo = 'junk';
  console.log('inside this function, `foo` == "' + foo + '"');
}
logFoo(); // => 'inside this function, `foo` == "barrrrrr"'
newFunc()

console.log(foo); // => 'fooo'

