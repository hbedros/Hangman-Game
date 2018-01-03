//Create an array of words
const words = ['red', 'blue', 'orange'];

//Choose word randomly
let randomNumber  = Math.floor(Math.random() * words.length);
var wins = 0;
var losses = 0;
let rightLetters = [];
let wrongLetters = [];
let chosenWords = words[randomNumber];
let underScore = [];
console.log(chosenWords);

//DOM manipulation
let docUnderScore = document.getElementsByClassName('underscore')
let docRightGuess = document.getElementsByClassName('right_guess')
let docWrongGuess = document.getElementsByClassName('wrong_guess')

// let wins = document.getElementsByClassName('wins_score');

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
        docUnderScore[0].innerHTML = underScore.join(' ');
        docRightGuess[0].innerHTML = rightLetters.join(' , ');
        console.log(underScore);
        if(underScore.join('') == chosenWords) {
            wins++;
        }


    }else {
        wrongLetters.push(pressedKeyLetter);
        docWrongGuess[0].innerHTML = wrongLetters.join(' , ');
        console.log(wrongLetters);
    }
    

    var html = 
    "<p>wins: " + wins + "</p>"

    document.querySelector(".wins_score").innerHTML = html;
});

docUnderScore[0].innerHTML = underScore.join(' ');

//check if guess is right
//if right push to rights array
//if wrong push to wrong array
 