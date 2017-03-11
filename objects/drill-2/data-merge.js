/*
Notes:

JSON.stringify(item) is a great way to toString() an Object or Array

Decided didn't need to deep copy the second stream.
var p2 = JSON.parse(JSON.stringify(stream2));

Could make a function, not really useful:
function find(id, arr) {
    return arr.find(function(item) {
        return id === item.id;
    });
}

Simple construct, don't like the index (idx) and need to use it reference the object itself:
console.log("stream1 "+JSON.stringify(stream1));
for (var idx in stream1) {
    var item = stream1[idx];
    console.log("item "+JSON.stringify(item));
}

Used node, needed:
npm i lodash

var _ = require('lodash');

*/

var _ = require('lodash');

/*
work with these until code is working:
var dataSource1 = [{id:'1', age:12}];
var dataSource2 = [{id:'1', credit:24}, {id:'5', credit:45}];
*/

function mergeDataStreams(stream1, stream2) {
    var results = JSON.parse(JSON.stringify(stream1)); // deep copy of first stream

    stream2.forEach(function(item) { // iterate through the second stream ensuring read only use
        // console.log("item "+JSON.stringify(item));

        var matchObj = results.find(function(obj) { // find this object in the first stream.
            return item.id === obj.id;          // match by property 'id'
        });
        if (matchObj === undefined) {           // if there is no match, not relevant in this test but included anyway
            matchObj = {};                      // create the match object
            matchObj.id = item.id;              // create the property 'id'
            results.push(matchObj);             // add to the results stream
        }
//        console.log("matchObj " + JSON.stringify(matchObj));

        var keys = Object.keys(item);           // create an Array of properties
//        console.log("keys " + JSON.stringify(keys));
        keys.forEach(function(key) {            // for each key that is not 'id'
//            console.log("key " + key);
            if (key !== 'id') {
                matchObj[key] = item[key];      // add property and value to object in results array
            }
        });
    });
    return results;     // return results of the merge
}

// data
var dataSource1 = [{
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

var dataSource2 = [{
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



// tests
function testMergeDataStreams(stream1, stream2) {
    var expected = stream1.map(function(item) {
        return _.assign(
            _.clone(item), stream2.find(function(item2) {
                return item.id === item2.id;
            }));
    });

    var actual = mergeDataStreams(stream1, stream2);

    var passing = actual && expected.map(function(item) {
        return _.isEqual(
            item,
            actual.find(function(_item) {
                return _item.id === item.id;
            })
        );
    }).every(function(result) {
        return result;
    });

    if (passing) {
        console.log('SUCCESS! mergeDataStreams works');
    } else {
        console.log('FAILURE! mergeDataStreams not working');
    }
}

testMergeDataStreams(dataSource1, dataSource2);
