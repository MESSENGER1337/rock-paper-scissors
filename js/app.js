// Global array of choices
const choices = ["rock", "paper", "scissors", "lizard", "spock"];

// Global score tracker
let humanScore = 0;
let computerScore = 0;

// Function to get the computer's choice
const getComputerChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
};

// Function to determine the winner
function determineWinner(human, computer) {
    if (human === computer) {
        return "It's a tie!";
    }

    // Winning conditions
    if (
        (human === "rock" && (computer === "scissors" || computer === "lizard")) ||
        (human === "paper" && (computer === "rock" || computer === "spock")) ||
        (human === "scissors" && (computer === "paper" || computer === "lizard")) ||
        (human === "lizard" && (computer === "spock" || computer === "paper")) ||
        (human === "spock" && (computer === "scissors" || computer === "rock"))
    ) {
        humanScore++; // Increment human score for a win
        return "You win!";
    } else {
        computerScore++; // Increment computer score for a loss
        return "Computer wins!";
    }
}

// Function to update the results and score on the page
function updateUI(humanChoice, computerChoice, result) {
    // Update results section
    const resultsDiv = document.querySelector(".results");
    resultsDiv.innerHTML = `
        <p>You chose: <strong>${humanChoice}</strong></p>
        <p>Computer chose: <strong>${computerChoice}</strong></p>
        <p>${result}</p>
    `;

    // Update score section
    const scoreDiv = document.querySelector(".score");
    scoreDiv.innerHTML = `
        <p>Your Score: ${humanScore}</p>
        <p>Computer Score: ${computerScore}</p>
    `;
}

// Function to play one round
function playRound(humanChoice) {
    const computerChoice = getComputerChoice(); // Get computer's choice
    const result = determineWinner(humanChoice, computerChoice); // Determine the winner

    updateUI(humanChoice, computerChoice, result); // Update the UI with results and score
}
