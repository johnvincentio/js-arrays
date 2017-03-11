var d1 = [{
    id: '0',
    firstName: 'Juan',
    lastName: 'Doe',
    age: 32
}, {
    id: '1',
    firstName: 'Jane',
    lastName: 'Doe',
    age: 31
}, {
    id: '2',
    firstName: 'Janice',
    lastName: 'Doe',
    age: 30
}, {
    id: '3',
    firstName: 'Jake',
    lastName: 'Doe',
    age: 29
}, ];

var d2 = [{
    id: '0',
    occupation: 'architect',
    address: {
        street: '123 Main St',
        city: 'CityTown',
        country: 'USA'
    }
}, {
    id: '1',
    occupation: 'architect',
    address: {
        street: '234 Main St',
        city: 'CityTown',
        country: 'USA'
    }
}, {
    id: '2',
    occupation: 'architect',
    address: {
        street: '345 Main St',
        city: 'CityTown',
        country: 'USA'
    }
}, {
    id: '3',
    occupation: 'architect',
    address: {
        street: '456 Main St',
        city: 'CityTown',
        country: 'USA'
    }
}, ];

var jv1 = [{id:1, age:12}];
var jv2 = [{id:1, credit:24}];

console.log("d1 "+JSON.stringify(d1));
for (var idx in d1) {
    var item = d1[idx];
    console.log("item "+JSON.stringify(item));
}

var p1 = JSON.parse(JSON.stringify(d1));
var p2 = JSON.parse(JSON.stringify(d2));

function find(id, arr) {
    return arr.find(function(item) {
        return id === item.id;
    });
}

var a1 = find ('1', p1);
console.log("a1 "+JSON.stringify(a1));

var a2 = find ('1', p2);
console.log("a2 "+JSON.stringify(a2));

var a2 = find ('25', p2);
console.log("a3 "+JSON.stringify(a2));

for (var idx in p1) {
    var item = p1[idx];
    console.log("item "+JSON.stringify(item));

    var matchObj = find(item['id'], p2);
    if (matchObj === undefined) continue;
    console.log("matchObj "+JSON.stringify(matchObj));
    var keys = Object.keys(matchObj);
    console.log("keys "+keys);
    for (var idx in keys) {
        console.log("idx "+idx+" key "+keys[idx]);
        if (keys[idx] === 'id') continue;
        var d1 = matchObj[keys[idx]];
        console.log("d1 "+JSON.stringify(d1));
        item[keys[idx]] = d1;
    }
}
console.log("merged p1 "+JSON.stringify(p1));
