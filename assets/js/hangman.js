//Create an array of words
const words = ['red', 'blue', 'orange'];

//Choose word randomly
let randomNumber  = Math.floor(Math.random() * words.length);
let rightLetters = [];
let wrongLetters = [];
let chosenWords = words[randomNumber];
let underScore = [];
console.log(chosenWords);

//Create underscores based on length of words
function generateUnderScore() {
    for(let i =0; i < chosenWords.length; i++){
        underScore.push('_');
    }
   return underScore;     
}
console.log(generateUnderScore());

//Get users guess
document.addEventListener('keypress', function() {
    let pressedKeyLetter = String.fromCharCode(event.keyCode);
    // console.log(pressedKeyLetter);

//if users guess is rigth 
    if(chosenWords.indexOf(pressedKeyLetter) > -1) {
        rightLetters.push(pressedKeyLetter);
        //replace underscore with right letters
        underScore[chosenWords.indexOf(pressedKeyLetter)] = pressedKeyLetter;
        console.log(underScore);
        if(underScore.join('') == chosenWords) {
            alert('you won');
        }


    }else {
        wrongLetters.push(pressedKeyLetter);
        console.log(wrongLetters);
    }
    
});
//check if guess is right
//if right push to rights array
//if wrong push to wrong array
 