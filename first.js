// Variables to keep track of scores
let userScore = 0;
let cpuScore = 0;

// DOM elements
const userScoreElement = document.getElementById('user-score');
const cpuScoreElement = document.getElementById('cpu-score');
const messageElement = document.getElementById('msg');
const choices = document.querySelectorAll('.choice img');

// Choices array
const choicesArray = ['rock', 'paper', 'scissors'];

// Add event listeners to each choice
choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.alt.split('-')[0]; // Get the user's choice from the image alt attribute
        const cpuChoice = getCpuChoice();
        playRound(userChoice, cpuChoice);
    });
});

// Function to generate a random choice for the CPU
function getCpuChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choicesArray[randomIndex];
}

// Function to play a round and update scores
function playRound(userChoice, cpuChoice) {
    if (userChoice === cpuChoice) {
        messageElement.textContent = `It's a draw! You both chose ${userChoice}.`;
    } else if (
        (userChoice === 'rock' && cpuChoice === 'scissors') ||
        (userChoice === 'paper' && cpuChoice === 'rock') ||
        (userChoice === 'scissors' && cpuChoice === 'paper')
    ) {
        userScore++;
        userScoreElement.textContent = userScore;
        messageElement.textContent = `You win! ${userChoice} beats ${cpuChoice}.`;
    } else {
        cpuScore++;
        cpuScoreElement.textContent = cpuScore;
        messageElement.textContent = `You lose! ${cpuChoice} beats ${userChoice}.`;
    }
}
