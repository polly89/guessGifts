var wishlist = [
    {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
    {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
    {name: "Card Game", size: "small", clatters: "no", weight: "light"}
];

var presents = [
    {size: "medium", clatters: "a bit", weight: "medium"},
    {size: "small", clatters: "yes", weight: "light"}
];



function guessGifts(wishlist, presents){
    let guesses = []
    presents.forEach(function(p){
        wishlist.forEach(function(w){
            if(p.size === w.size && p.clatters === w.clatters && p.weight === w.weight) guesses.push(w.name)
        })
    })
    return guesses
}

console.log(guessGifts(wishlist, presents))

// Start by creating an empty variable where you will store your guesses.
// Then, use a for each to loop through presents and another to loop through the wishlit array. 
// If the size, clatter, and weight match push the name into the guesses array
// Finally, return those results. 