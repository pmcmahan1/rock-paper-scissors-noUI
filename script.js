
// This function assigns the computer's choice of rock, paper, or scissors
function getComputerChoice() {
    const number = Math.floor(Math.random() * 1000);
    if (number % 3 === 0) {
            return 'rock';
    }
    if (number % 3 === 1) {
            return 'paper';
    }
    return 'scissors';
}

// This function runs a single game of rock, paper, or scissors
function playGame(userSelection, computerSelection) {
    if (computerSelection == userSelection) {
        return 'Tie!';
    }
    else if (userSelection == 'rock' && computerSelection == 'scissors') {
        return 'You win! rock beats scissors'
    }
    else if (userSelection == 'paper' && computerSelection == 'rock') {
        return 'You win! paper beats rock'
    }
    else if (userSelection == 'scissors' && computerSelection == 'paper') {
        return 'You win! scissors beats paper'
    }
    else {
        return 'You lose! ' + computerSelection + " beats " + userSelection;
    }
}



// Assigning the computer's choice to a variable we can use
computerSelection = getComputerChoice();

// Prompting the user to type either rock, paper, or scissors
let userPrompt = prompt("Please input either rock, paper, or scissors");

// Forces whatever user input into lower case
let userSelection = userPrompt.toLowerCase();

// Runs the game function from above
playGame();

// Shows the computers selection in the console, to make sure everything is working
console.log(computerSelection)

//Displays the game results in the console
console.log(playGame(userSelection, computerSelection));