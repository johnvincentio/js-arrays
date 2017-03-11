function showObject(obj) {
    for (var key in obj) {
        console.log("key " + key+" value "+obj[key]);
    }
}

function showObjectValue(str, obj) {
    if (str in obj) {
        console.log("str value is "+obj[str]);
    }
}
var obj = {};
obj.x = 3;
obj['y'] = 5;
showObject(obj);

showObjectValue('y', obj);

obj['y'] = 21;
showObjectValue('y', obj);
