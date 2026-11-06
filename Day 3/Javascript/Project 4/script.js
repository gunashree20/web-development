let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {

    let choices = ["Rock", "Paper", "Scissors"];

    let randomNumber = Math.floor(Math.random() * 3);

    let computerChoice = choices[randomNumber];

    let result = "";

    if (playerChoice === computerChoice) {

        result = "It's a Draw!";

    }

    else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {

        result = "🎉 You Win!";

        playerScore = playerScore + 1;

    }

    else {

        result = "😢 Computer Wins!";

        computerScore = computerScore + 1;

    }

    document.getElementById("result").textContent = result;

    document.getElementById("computer").textContent =
        "Computer chose: " + computerChoice;

    document.getElementById("score").textContent =
        "Your Score: " + playerScore +
        " | Computer: " + computerScore;

}

function resetGame() {

    playerScore = 0;

    computerScore = 0;

    document.getElementById("result").textContent = "Let's Play!";

    document.getElementById("computer").textContent = "Computer: Waiting...";

    document.getElementById("score").textContent =
        "Your Score: 0 | Computer: 0";

}