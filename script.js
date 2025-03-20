function getComputerChoice() {
    let random = Math.floor(Math.random() * 3); // 0, 1, or 2
    let choice = "";

    // 0 = rock, 1 = paper, 2 = scissors
    if (random === 0) {
        choice = "rock";
    } else if (random === 1) {
        choice = "paper";
    } else if (random === 2) {
        choice = "scissors";
    }

    console.log("computer choice: " + choice);
    return choice;
}

function getHumanChoice() {
    let humanChoice = prompt("choice?");
    console.log("human choice: " + humanChoice);
    return humanChoice;
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    function playRound(humanChoice, computerChoice) {
        let statement = "";
        humanChoice = humanChoice.toLowerCase(); // "Make your function’s humanChoice parameter case-insensitive"
        // tie conditions
        if (humanChoice === computerChoice) {
                statement = "Tie!";
            } 
            // win conditions
            else if ((humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")) {
                statement = "You win! " + humanChoice + " beats " + computerChoice + "!";
                humanScore++;
            } 
            // lose conditions
            else {
                statement = "You lose. " + computerChoice + " beats " + humanChoice + "!";
                computerScore++;
            }

            console.log(statement);
    }

    // play five rounds
    for (let i = 0; i < 5; i++) {
        console.log("Round " + (i + 1)); // current round

        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();

        playRound(humanSelection, computerSelection);

        console.log("Scores:\nComputer: " + computerScore + "\nHuman: " + humanScore)
    }

    // final statement
    if (humanScore < computerScore) {
        console.log("Computer won more rounds than you.");
    } else if (humanScore > computerScore) {
        console.log("You won more rounds than Computer!");
    } else {
        console.log("Tie!")
    }
}

playGame();