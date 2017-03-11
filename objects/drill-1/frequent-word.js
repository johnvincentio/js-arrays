'use strict';

function mostFrequentWord(words) {      // sorted array of words
    var results = [];
    words.forEach(function(wordsItem) {
        var match = results.findIndex(function(resultItem) {
            return resultItem.word === wordsItem;
        });
        if (match === -1) {
            results.push({
                word: wordsItem,
                count: 1
            });
        }
        else {
            results[match].count++;
        }
    });
//    show("before sort", results);
    results.sort(function(a, b) {    // sort by higher count and then by word
        if (a.count < b.count) return 1;
        if (a.count > b.count) return -1;
        if (a.word < b.word) return -1;
        if (a.word > b.word) return 1;
        return 0;
    });
//    show("after sort", results);
    return results[0].word;
}

function show(msg, array) {
    console.log(">>> show; "+msg);
    array.forEach(function(item) {
        console.log(" word "+item.word+" count "+item.count);
    });
    console.log("<<< show");
}

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
