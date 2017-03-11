
var steps = [ 'wash', 'rinse', 'repeat'];

var stepsElements = steps.map(function(step) {
  return '<li>' + step + '</li>'; 
});

console.log('<ul>\n\t' + stepsElements.join('\n\t') + '\n</ul>'); // <ul> 
                 //   <li>wash</li>
                 //   <li>rinse</li>
                 //   <li>repeat</li>
                 // </ul>

