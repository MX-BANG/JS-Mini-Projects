const HeightInput = document.getElementById("height");
const WeightInput = document.getElementById("weight");
const CalculateBtn = document.getElementById("calculate");
const BmiValue = document.getElementById("bmi-value");
const BmiStatus = document.getElementById("bmi-status");

CalculateBtn.addEventListener("click", function(){
    const height = Number(HeightInput.value);
    const weight = Number(WeightInput.value);

    const bmi = weight / ((height / 100) ** 2);
    //toFixed is used for controlling the size of the decimal e.g toFixed(2) so it will give .00
    BmiValue.innerText = "Your BMI: " + bmi.toFixed(2);

    //Let is mainly only used when the value has to change and is not fixed throughout the progrm
    let category = "";

    if (bmi <18.5){
        category = "underweight";
    } else if(bmi < 24.6){
        category = "normal";
    } else if (bmi < 29.9){
        category = "overweight";
    } else{
        category = "obese";
    }

    BmiStatus.innerText = "Category: " + category;
})