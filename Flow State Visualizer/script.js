const challengeSlider = document.getElementById("challenge");
const abilitySlider = document.getElementById("ability");

const stateText = document.getElementById("state");
const anxeityFill = document.getElementById("anxietyFill");
const boredomFill = document.getElementById("boredomFill");

function updateState(){
    const challenge = parseFloat(challengeSlider.value);
    const ability = parseFloat(abilitySlider.value);

    let state = "Flow";
    let anxiety = 0;
    let boredom = 0;

    stateText.classList.remove("flow-glow");

   if (challenge > ability + 1.5) {
    state = "Anxiety";
    anxiety = Math.min((challenge - ability) * 10, 100);
  } else if (ability > challenge + 1.5) {
    state = "Boredom";
    boredom = Math.min((ability - challenge) * 10, 100);
  } else {
    stateText.classList.add("flow-glow");
  }

    stateText.textContent = state;

    anxeityFill.style.height = `${anxiety}%`;
    boredomFill.style.height = `${boredom}%`;
}

challengeSlider.addEventListener("input", updateState);
abilitySlider.addEventListener("input", updateState);

updateState();