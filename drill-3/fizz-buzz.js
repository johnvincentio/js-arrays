function fizzBuzz(countTo) {
    var result = [];
    for (var cnt = 1; cnt <= countTo; cnt++) {
        if (cnt % 3 === 0 && cnt % 5 === 0)
            result.push('fizzbuzz');
        else if (cnt % 3 === 0)
            result.push('fizz');
        else if (cnt % 5 === 0)
            result.push('buzz');
        else
            result.push(cnt);
    }
    return result;
}

// tests
(function testFizzBuzz() {
    // we'll use the variables in our test cases
    var countTo = 16;
    var expected = [
        1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz',
        'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16
    ];
    console.log("expected "+expected);

    var actual = fizzBuzz(countTo) || [];
    console.log("actual "+actual);

    if (
        expected.length === actual.length &&
        expected.every(function(item, index) {
            return actual[index] === item;
        })) {

        console.log('SUCCESS: fizzBuzz is working');
    } else {
        console.log('FAILURE: fizzBuzz is not working');
    }
})();
