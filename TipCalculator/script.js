const BillInput = document.getElementById("bill");
const TipInput = document.getElementById("tip");
const CalculateBtn = document.getElementById("calculate");
const TipAmount = document.getElementById("tip-amount");
const TotalAmount = document.getElementById("total-amount");

CalculateBtn.addEventListener("click", function() {
    const bill = Number(BillInput.value);
    const tipPercent = Number(TipInput.value);

    const tip = bill * (tipPercent/100);
    const Total = bill + tip;

    TipAmount.innerText = `Tip: RS ${tip.toFixed(2)}`;
    TotalAmount.innerText = `Total Amount: RS ${Total.toFixed(2)}`;
});