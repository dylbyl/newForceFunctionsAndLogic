// LIGHTNING EXERCISE 1
// Copy and paste the following code block into your file
let sentenceBeginning = "The symtoms of Covid-19 are"
const symtoms = ["cough", "fever", "exhaustion", "loss of sense of smell", "difficulty breathing"]
const mySymtoms = [];
// This loop will go through each symtom, concatenate it to our sentence, and push it into a new array of our own personal symtoms
for(let i = 0; i < symtoms.length; i++){
    sentenceBeginning += ` ${symtoms[i]}`
    mySymtoms.push(symtoms[i])
}
// Using the new variable keywords we just learned, troubleshoot this code so that it runs without errors
//LIGHTNING EXERCISE 2
// Copy and paste the following code block into your file
let taco;
function tacoTruck(shellType, toppings){
    taco = `A ${shellType} taco with ${toppings}`
}
tacoTruck("soft shell", "sour cream")
console.log(taco)
// Using the new variable keywords we just learned, refactor this code so that we can log what type of taco we ordered outside of the function without error messages


function giveNameGreeting(firstName, lastName){
    return `Why hello there ${firstName} ${lastName}!!`
}

console.log(giveNameGreeting("Dylan", "Bishop"))



let bandNumber = 1

function takeNumber (bandName) {
    let returnSentence = `${bandNumber}. ${bandName}`
    bandNumber++;
    return returnSentence;
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console




const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

for(let i = 0; i < foods.length; i++){
    grill(foods[i]);
    console.log(cookedFood[i]);
}



// Create an array that contains the words in the sentence
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

/*
    The addExcitement function should be an impure function, and accept
    the array as the sole argument. It should iterate over the array
    and output the words to the browser console.
*/
addExcitement = (theWordArray, symbol, multiplier) => {

    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        if (i % 3 === 2){
            buildMeUp += theWordArray[i]
            for(let i = 0; i < multiplier; i++){
                buildMeUp += symbol;
            }
        }
        else{
            buildMeUp += theWordArray[i];
        }
        buildMeUp += " ";
        // Print buildMeUp to the console
        console.log(buildMeUp);
    }

}

// Invoke the function and pass in the array
addExcitement(sentence, "?", 4)