const submitGuessButton = document.getElementById("submitGuess");
const guessInput = document.getElementById("guessInput");
const resultDiv = document.getElementById("result");
const resetButton = document.getElementById("resetButton");

let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

submitGuessButton.addEventListener("click", function() {
    const guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < 1 || guess > 100) {
        resultDiv.textContent = "Please enter a valid number between 1 and 100.";
        resultDiv.classList.add("loser");
        return;
    }

    attempts++;

    if (guess === secretNumber) {
        resultDiv.textContent = `Congratulations! You've guessed the right number (${secretNumber}) in ${attempts} attempts! 🎉`;
        resultDiv.classList.add("winner");
        resultDiv.classList.remove("loser");
        resetButton.classList.remove("hidden");
        guessInput.disabled = true; 
    } else if (guess < secretNumber) {
        resultDiv.textContent = "Too low! Try again.";
        resultDiv.classList.add("loser");
        resultDiv.classList.remove("winner");
    } else {
        resultDiv.textContent = "Too high! Try again.";
        resultDiv.classList.add("loser");
        resultDiv.classList.remove("winner");
    }

    resultDiv.classList.remove("hidden");
});

resetButton.addEventListener("click", function() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    guessInput.value = "";
    guessInput.disabled = false;
    resultDiv.classList.add("hidden");
    resetButton.classList.add("hidden");
});
