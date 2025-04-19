const quotes = [
    "Don't let yesterday take up too much of today.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it.",
    "Success doesn’t just find you. You have to go out and get it.",
    "It’s going to be hard, but hard does not mean impossible.",
    "Don’t wait for opportunity. Create it.",
    "Sometimes later becomes never",
    "Do it now.",
    "The key to success is to start before you are ready."
];

const quoteText = document.getElementById("quote");
const quoteBtn = document.getElementById("new-quote");

quoteBtn.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteText.innerText = randomQuote;
}
);
