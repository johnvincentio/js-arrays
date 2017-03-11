function average(numbers) {
    if (numbers === undefined || numbers === null || numbers.length < 1)
        return null;
    var total = 0;
    numbers.forEach(function(item) {
        total += item;
    });
    return total / numbers.length;
}

// tests

function testFunctionWorks(fn, input, expected) {
    if (fn(input) === expected) {
        console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
        return true;
    } else {
        console.log(
            'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
            ' but was ' + fn(input)
        );
        return false;
    }
}

(function runTests() {
    var numList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    var correctAns1 = 5.5;
    var numList2 = [0, -1, 1];
    var correctAns2 = 0;

    var testResults = [
        testFunctionWorks(average, numList1, correctAns1),
        testFunctionWorks(average, numList2, correctAns2)
    ];
    var numPassing = testResults.filter(function(result) {
        return result;
    }).length;
    console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
})();
