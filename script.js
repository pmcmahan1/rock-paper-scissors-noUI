
// This function assigns the computer's choice of rock, paper, or scissorss
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

// Assigning the computer's choice to a variable we can use
computerSelection = getComputerChoice();
console.log(computerSelection);