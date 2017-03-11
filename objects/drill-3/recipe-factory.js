function recipeFactory(name, ingredients, steps) {
    return {
        name: name,
        ingredients: ingredients,
        steps: steps,
        ingredientsHtml: function() {
            console.log("in ingredientsHtml");
            var str = '<ul>';
            ingredients.forEach(function(item) {
                str+= '<li>' + item + '</li>';
            });
            str += '</ul>';
            return str;
        },
        stepsHtml: function() {
            var str = '<ol>';
            steps.forEach(function(item) {
                str+= '<li>' + item + '</li>';
            });
            str += '</ol>';
            return str;
        }
    };
}

// tests

function testRecipeFactory() {
    var grilledCheese = recipeFactory(
        'grilled cheese', ['2 slices bread', 'butter', '1 slice cheese'], ['Butter bread', 'Put cheese between bread', 'Toast bread on stove']
    );
    if (grilledCheese) {
        // `$` is a shortcut to the jQuery library, which
        // you'll learn about in the next unit.
        // Here, we're using jQuery to update elements in the HTML
        $('.js-recipe-name').text(grilledCheese.name);
        $('.js-ingredients').html(grilledCheese.ingredientsHtml());
        $('.js-steps').html(grilledCheese.stepsHtml());
    }
}

testRecipeFactory();
