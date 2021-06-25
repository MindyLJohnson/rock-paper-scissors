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

const computerSelection = computerPlay();

console.log(playRound("roCK", computerSelection));