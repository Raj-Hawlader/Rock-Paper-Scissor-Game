let userScore = 0;
let cpuScore = 0;

const userScoreElement = document.getElementById('user-score');
const cpuScoreElement = document.getElementById('cpu-score');
const messageElement = document.getElementById('msg');
const choices = document.querySelectorAll('.choice img');
const choicesArray = ['rock', 'paper', 'scissors'];

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.alt.split('-')[0];
        const cpuChoice = getCpuChoice();
        playRound(userChoice, cpuChoice);
    });
});

function getCpuChoice() {
    const randomIndex = Math.floor(Math.random() * 3);
    return choicesArray[randomIndex];
}

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
