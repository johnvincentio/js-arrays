'use strict';

function mostFrequentWord(words) {      // sorted array of words
    var results = {};
    words.forEach(function(wordsItem) {
        if (wordsItem in results) {     // wordsItem is a property of the object
            results[wordsItem]++;       // properties are added in alphabetical order
                                        // increment value of property worditem
        }
        else {
            results[wordsItem] = 1;     // add property worditem with a value of 1
        }
    });
    var maxWord = null;
    for (var word in results) {             // iterate of sorted property list
        if (maxWord === null) {
            maxWord = word;
        }
        else {
            if (results[word] > results[maxWord])
                maxWord = word;
        }
    }
    return maxWord;
}

/*
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
*/

function getTokens(rawString) {
    // returns an alphabetically sorted list of words, removing punctuation characters
    return rawString.toLowerCase().split(/[ ,!.";:-]+/).filter(Boolean).sort();
}

// `getTokens` returns an alphabetically sorted list of words

(function testMostFrequentWord() {
    var spaceOddityText2 = 'stu pqr def abc pqr def ';

    var spaceOddityText = 'Ground Control to Major Tom\n \
Ground Control to Major Tom\n \
Take your protein pills and put your helmet on\n \
Ground Control to Major Tom (ten, nine, eight, seven, six)\n \
Commencing countdown, engines on (five, four, three)\n \
Check ignition and may God\'s love be with you (two, one, liftoff)\n \
\n \
This is Ground Control to Major Tom\n \
You\'ve really made the grade\n \
And the papers want to know whose shirts you wear\n \
Now it\'s time to leave the capsule if you dare\n \
"This is Major Tom to Ground Control\n \
I\'m stepping through the door\n \
And I\'m floating in a most peculiar way\n \
And the stars look very different today\n \
For here\n \
Am I sitting in a tin can\n \
Far above the world\n \
Planet Earth is blue\n \
And there\'s nothing I can do\n \
\n \
Though I\'m past one hundred thousand miles\n \
I\'m feeling very still\n \
And I think my spaceship knows which way to go\n \
Tell my wife I love her very much she knows\n \
Ground Control to Major Tom\n \
Your circuit\'s dead, there\'s something wrong\n \
Can you hear me, Major Tom?\n \
Can you hear me, Major Tom?\n \
Can you hear me, Major Tom?\n \
Can you \"Here am I floating \'round my tin can\n \
Far above the moon\n \
Planet Earth is blue\n \
And there\'s nothing I can do\"';

    var expected = 'major';
    var actual = mostFrequentWord(getTokens(spaceOddityText));
    if (expected === actual) {
        console.log('SUCCESS: `mostFrequentWord` is working');
    } else {
        console.log('FAILURE: `mostFrequentWord` is not working');
    }
})();
