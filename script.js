const resultsDiv = document.querySelector(".results");

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

    return choice;
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    let round = 0;

    function playRound(humanChoice, computerChoice) {
    // determine results
        let statement = "";
        // tie conditions
        if (humanChoice === computerChoice) statement = "tie!";

        // win conditions
        else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")) {
            statement = "you win! " + humanChoice + " beats " + computerChoice + "!";
            humanScore++;
        } 
        // lose conditions
        else {
            statement = "you lose. " + computerChoice + " beats " + humanChoice + "!";
            computerScore++;
        }

            
    // display round
        let roundElem = document.createElement("h2"); // create element
        roundElem.textContent = "round " + (round + 1); // add text to element
        resultsDiv.appendChild(roundElem); // append element to results div

    // display computer choice
        let computerChoiceElem = document.createElement("p");
        computerChoiceElem.textContent = "computer choice: " + computerChoice;
        resultsDiv.appendChild(computerChoiceElem);

    // display human choice
        let humanChoiceElem = document.createElement("p");
        humanChoiceElem.textContent = "human hhoice: " + humanChoice;
        resultsDiv.appendChild(humanChoiceElem);

    // display results
        let resultsElem = document.createElement("p");
        resultsElem.textContent = statement;
        resultsDiv.appendChild(resultsElem);

    // display score
        let scoreElem = document.createElement("p");
        scoreElem.textContent = "Computer Score: " + computerScore + " | Human Score: " + humanScore;
        resultsDiv.appendChild(scoreElem);

            round++;
    }

    const rockButton = document.querySelector(".rock-button");
    const paperButton = document.querySelector(".paper-button");
    const scissorsButton = document.querySelector(".scissors-button");
    
    rockButton.addEventListener("click", () => {
        playRound("rock", getComputerChoice());
    });
    
    paperButton.addEventListener("click", () => {
        playRound("paper", getComputerChoice());
    });
    
    scissorsButton.addEventListener("click", () => {
        playRound("scissors", getComputerChoice());
    });
}

playGame();