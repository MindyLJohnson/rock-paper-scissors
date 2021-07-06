let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let randomSelectionIndex = Math.floor(Math.random()*3);

    switch(randomSelectionIndex) {
        case 0:
            randomSelection = "Rock";
            break;
        case 1:
            randomSelection = "Paper";
            break;
        case 2:
            randomSelection = "Scissors";
            break;
        default:
            randomSelection = "Rock";
        }

    return randomSelection;
}

function playRound(playerSelection, computerSelection) {
    let roundResult = '';

    playerSelection = playerSelection.charAt(0).toUpperCase() 
         + playerSelection.substr(1, playerSelection.length-1).toLowerCase();

    switch(true) {
        case (playerSelection === computerSelection):
            roundResult = `It's a tie! ${playerSelection} vs. ${computerSelection}`;
            break;
        case (playerSelection === "Rock" && computerSelection === "Scissors"):
        case (playerSelection === "Paper" && computerSelection === "Rock"):
        case (playerSelection === "Scissors" && computerSelection === "Paper"):
            roundResult = `You Win! ${playerSelection} beats ${computerSelection}`;
            break;
        case (computerSelection === "Rock" && playerSelection === "Scissors"):
        case (computerSelection === "Paper" && playerSelection === "Rock"):
        case (computerSelection === "Scissors" && playerSelection === "Paper"):
            roundResult = `You Lose! ${computerSelection} beats ${playerSelection}`;
            break;
        default:
            roundResult = "Uhoh! Something went wrong."
    }

    return roundResult;
}

function game(playerSelection) {
    let gameResult = '';

    if (playerScore < 5 && computerScore < 5) {
        let computerSelection = computerPlay();
        roundResult = playRound(playerSelection, computerSelection);
        
        switch(true) {
            case (roundResult.startsWith("You Win!")):
                playerScore++;
                break;
            case (roundResult.startsWith("You Lose!")):
                computerScore++;
                break;                
        }
    }

    if (playerScore >= 5) {
        gameResult = "**CONGRATS!! YOU'RE THE WINNER!!**";
    }
    else if (computerScore >= 5) {
        gameResult = "^^Bummer! You're a LOSER!!^^";
    }

    const playerScores = document.querySelector('#player-score');
    playerScores.textContent = `Player's Score: ${playerScore}`;

    const computerScores = document.querySelector('#computer-score');
    computerScores.textContent = `Computer's Score: ${computerScore}`;

    const roundResults = document.querySelector('#round-results');
    roundResults.textContent = roundResult;

    const gameResults = document.querySelector('#game-results');
    gameResults.textContent = gameResult;
}

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        game(button.id);
    })
});