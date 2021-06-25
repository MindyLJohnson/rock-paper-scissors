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
    let roundResult = "Dud! Noone wins!";
    playerSelection = playerSelection.charAt(0).toUpperCase() 
        + playerSelection.substr(1, playerSelection.length).toLowerCase();

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

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let gameResult = "Dud! Everyone loses!";
        let computerSelection = computerPlay();
        let playerSelection = "Rock";
        roundResult = playRound(playerSelection, computerSelection);

        switch(true) {
            case (roundResult.startsWith("You Win!")):
                playerScore++;
                break;
            case (roundResult.startsWith("You Lose!")):
                computerScore++;
                break;
        }

        console.log(roundResult);
        console.log(`Player's Score: ${playerScore}`);
        console.log(`Computer's Score: ${computerScore}`);
        console.log('');
    }

    if (playerScore > computerScore) {
        gameResult = "**CONGRATS!! YOU'RE THE WINNER!!**";
    }
    else if (playerScore < computerScore) {
        gameResult = "^^Bummer! You're a LOSER!!^^";
    }
    else {
        gameResult = "Nice try, but it's a tie!";
    }

    return gameResult;
}

console.log(game());