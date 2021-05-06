/// 1

let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false],
];

function loop(array) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        for (let index = 0; index < element.length; index++) {
            const result = element[index];
            console.log(result);
        }
    }
}

loop(board);

///2 

const doggo = { Candy: "Puddle", Tito: "chiuaua", Jackson: "Bulldog", favoriteFoods: ["tacos", "burritos", "Cheetos", "Jarritos"] }

console.log(doggo.favoriteFoods[1]);

function pupFood(object) {
    for (const i of object.favoriteFoods) {
        console.log(i);

    }

}

pupFood(doggo);

/// 3

const recipes = {
        ingredients: { butter: "", sugar: "", flour: "" },
        method: function() {
            console.log(Object.values(this.ingredients));

        }
    }
    // Object.assign(recipes.ingredients, { ginger: "" });
recipes.ingredients.ginger = "";
delete recipes.ingredients.sugar;
recipes.ingredients.brownsugar = "";
console.log(recipes);
recipes.method();