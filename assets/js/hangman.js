// create an array of words
const words = ['red', 'blue', 'orange'];
// choose word randomly
let randNum  = Math.floor(Math.random() * words.length);
let chosenWords = words[randNum];
console.log(chosenWords);
let underScore = [];
//create underscores based on length of words
function generateUnderScore() {
    for(let i =0; i < chosenWords.length; i++){
        underScore.push('_');
    }
   return underScore;     
}

console.log(generateUnderScore());
//Get users guess
document.addEventListener('keypress', function() {
    let pressedKeyCode = event.keyCode;
    console.log(pressedKeyCode);
});
//check if guess is right
//if right push to rights array
//if wrong push to wrong array
