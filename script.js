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
            randomSelection = "error";
        }

    return randomSelection;
}

console.log(computerPlay());