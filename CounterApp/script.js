const counterDisplay = document.getElementById("counter")
const increaseButton = document.getElementById("increase")
const decreaseButton = document.getElementById("decrease")

let count = 0;  

increaseButton.addEventListener("click", function() {
    count++;
    counterDisplay.innerText = count;
}
);

decreaseButton.addEventListener("click", function() {
    count--;
    counterDisplay.innerText = count;
}
);