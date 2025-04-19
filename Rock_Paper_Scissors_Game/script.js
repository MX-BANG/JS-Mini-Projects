const choices = document.querySelectorAll(".choice")
const result =  document.getElementById("result")

choices.forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.dataset.choice;
        const computerChoice = getComputerChoice();
        const outcome = getResult(userChoice, computerChoice);
        result.innerText = `You chose ${userChoice}, computer chose ${computerChoice}. ${outcome}`;

    });
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

function getResult(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

