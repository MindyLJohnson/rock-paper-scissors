/*computerPlay() generates a random number 0-2, 
which is then associated with either Rock, Paper, or Scissors*/
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

/*playRound() takes two inputs (one from the player and one from the computer)
and compares them to determine who wins the round, based on classic Rock, Paper,
Scissors rule. Rock beat Scissors, Scissors beats Paper, and Paper beats Rock.*/
function playRound(playerSelection, computerSelection) {
    let roundResult = "Dud! Noone wins!";

    /*If the player hits "Cancel" on the prompt window, then the game is cancelled.
    Otherwise, the player's selection is forced to be capitalized.*/
    if (playerSelection === null) {
        roundResult = "Game Cancelled"
        return roundResult;
    }
    else {
        playerSelection = playerSelection.charAt(0).toUpperCase() 
        + playerSelection.substr(1, playerSelection.length-1).toLowerCase();
    }

    /*Check to see if the player or computer won.*/
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

/*game() starts a 5-round game of Rock, Paper, Scissors. The player is prompted
to input a new selection for each round.*/
function game() {
    let playerScore = 0; /*Initiatlize player's score*/
    let computerScore = 0; /*Initiatlize computer's score*/

    /*Loop for 5 rounds*/
    for (let i = 0; i < 5; i++) {
        let gameResult = "Dud! Everyone loses!"; /*Initiatlize the game result*/
        let computerSelection = computerPlay();  /*Get computer's selection*/
        let playerSelection = prompt("Rock, Paper, or Scissors?"); /*Ask for the player's selection*/
        roundResult = playRound(playerSelection, computerSelection);  /*Play a round*/
        
        /*If the player cancels the game, then break from the loop.*/
        if (roundResult === "Game Cancelled") {
            break;
        }

        /*Check if the player won or lost the round*/
        switch(true) {
            case (roundResult.startsWith("You Win!")):
                playerScore++;
                break;
            case (roundResult.startsWith("You Lose!")):
                computerScore++;
                break;                
        }

        /*Output the results of the round and current scores to the console.*/
        console.log(roundResult);
        console.log(`Player's Score: ${playerScore}`);
        console.log(`Computer's Score: ${computerScore}`);
        console.log('');
    }

    /*Check for the overall winner of the 5 rounds, or if the game was cancelled.*/
    if (roundResult === "Game Cancelled") {
        return roundResult;
    }
    else if (playerScore >> computerScore) {
        gameResult = "**CONGRATS!! YOU'RE THE WINNER!!**";
    }
    else if (playerScore << computerScore) {
        gameResult = "^^Bummer! You're a LOSER!!^^";
    }
    else {
        gameResult = "Nice try, but it's a tie!";
    }

    /*Output the final results*/
    return gameResult;
}

console.log(game());