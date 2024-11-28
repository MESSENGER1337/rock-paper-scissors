








// Global array of choices
const choices = ["rock", "paper", "scissors"];

// Get human choice
function getHumanChoice() {
    let choiceIndex = parseInt(prompt("Enter your choice: 1 for rock, 2 for paper, 3 for scissors")) - 1;
    if (choiceIndex >= 0 && choiceIndex < choices.length) {
        return choices[choiceIndex]; // Map input to the choice array
    } else {
        console.log("Invalid input! Please choose a number between 1 and 3.");
        return getHumanChoice(); // Retry if input is invalid
    }
}

// Get computer choice
const getComputerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
};

// Determine the winner
function determineWinner(human, computer) {
    if (human === computer) {
        return "It's a tie!";
    } else if (
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

// Play the game
const humanChoice = getHumanChoice();
console.log(`You chose: ${humanChoice}`);

const computerChoice = getComputerChoice();
console.log(`Computer chose: ${computerChoice}`);

console.log(determineWinner(humanChoice, computerChoice));






















// Step 3: Write the logic to get the human choice
// Your game will be played by a human player. You will write a function that takes the user choice and returns it.

// Create a new function named getHumanChoice.
// Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
// Hint: Use the prompt method to get the user’s input.
// Test what your function returns by using console.log.


// Step 4: Declare the players score variables
// Your game will keep track of the players score. You will write variables to keep track of the players score.

// Create two new variables named humanScore and computerScore in the global scope.
// Initialize those variables with the value of 0.


// Step 5: Write the logic to play a single round
// Your game will be played round by round. You will write a function that takes the human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.

// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// Increment the humanScore or computerScore variable based on the round winner.


