// Random Number Generator.
const MIN = 1;
const MAX = 100;
const Answer = Math.floor(Math.random()*(MAX-MIN)+MIN);
// console.log(Answer);

// Guess of the User.

let guessNum = 0;

// Sumbission.
const mySubmit = document.getElementById("mySubmit");

//Reply.

mySubmit.onclick = function(){
    let myReply = document.getElementById("myReply");
    let myScore = document.getElementById("myScore");
    let myGuess = Number(document.getElementById("myGuess").value);
    while (myGuess!=Answer){
        guessNum++
        myGuess = myGuess>Answer ? window.prompt("Too High, Retry") : window.prompt("Too Low, Retry") ;
    }  
    myReply.textContent = "Yes you are correct."; 
    myScore.textContent = `You took ${guessNum} guesses.`;
}

