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

        const resultsDiv = document.querySelector(".results");

        if (document.querySelector(".game-over")) return;

        const roundDivElem = document.createElement("div");

        // display round
            const roundElem = document.createElement("h2"); // create element
            roundElem.textContent = "round " + (round + 1); // add text to element
            roundDivElem.appendChild(roundElem); // append element to round div

        // display computer choice
            const computerChoiceElem = document.createElement("p");
            computerChoiceElem.textContent = "computer choice: " + computerChoice;
            roundDivElem.appendChild(computerChoiceElem);

        // display human choice
            const humanChoiceElem = document.createElement("p");
            humanChoiceElem.textContent = "human choice: " + humanChoice;
            roundDivElem.appendChild(humanChoiceElem);

        // display results
            const resultsElem = document.createElement("p");
            resultsElem.textContent = statement;
            roundDivElem.appendChild(resultsElem);

        // display score
            const scoreElem = document.createElement("p");
            scoreElem.textContent = "Computer Score: " + computerScore + " | Human Score: " + humanScore;
            roundDivElem.appendChild(scoreElem);
            
        if (humanScore == 5 || computerScore == 5) {
            const gameOverDivElem = document.createElement("div");
            gameOverDivElem.classList.add("game-over");
        // game over
            const gameOverElem = document.createElement("h2");
            gameOverElem.textContent = "game over!";
            gameOverDivElem.appendChild(gameOverElem);

            if (humanScore == 5) {
                const gameResultElem = document.createElement("p");
                gameResultElem.textContent = "congrats! you beat the computer to 5 points!"
                gameOverDivElem.appendChild(gameResultElem);
            }
            if (computerScore == 5) {
                const gameResultElem = document.createElement("p");
                gameResultElem.textContent = "oh no! the computer beat you to 5 points."
                gameOverDivElem.appendChild(gameResultElem);
            }

            resultsDiv.insertBefore(roundDivElem, resultsDiv.firstChild);
            resultsDiv.insertBefore(gameOverDivElem, roundDivElem);
        }
        else {
        // add round div elem to beginning of results div
            resultsDiv.insertBefore(roundDivElem, resultsDiv.firstChild);
        }

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