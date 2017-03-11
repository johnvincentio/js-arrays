
var directionsLibrary = [
  ['wash', 'rinse', 'repeat'],
  ['be born', 'live', 'die'],
            ['wake', 'work', 'sleep']
];

function saveDirectionInDatabase(direction) {
  // save the direction in the database
  console.log('`saveDirectionInDatabase` called with direction '+direction);
}

directionsLibrary.forEach(saveDirectionInDatabase);

