
// generate the random number between 1 - 100;

const secretnum= Math.floor(Math.random()* 100) +1;

// number guess mode
let guesses=0;

function guessnum() {
    // get the user guess
    const guess=Number(document.getElementById('guessinput').value);

    // validate the input
    if(isNaN(guess)) {
        document.getElementById("message").textContent="please enter the valid num.";
        return;
    }

    // increment guesses
    guesses++;


    // check if the number is correct
    if (guess ===secretnum){
        document.getElementById("message").textContent=`congratulation! you guessed number in ${guesses} tries.`;

        // display the guess button and input
        document.getElementById("guessinput").disabled=true;
        document.getElementById("guessButton").disabled=true;
    } 
    else if(guess<secretnum){
        document.getElementById("message").textContent="your guess is too low. try again!";
    }
    else {
            document.getElementById("message").textContent="your guess is too high. try again!"
    
        }
    
}