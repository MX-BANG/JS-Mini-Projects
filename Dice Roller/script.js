const dice = document.getElementById("dice");

const rotations = {
    1: { x: 0, y: 0 },
    2: { x:-180, y: 0 },
    3: { x: 0, y: -90 },
    4: { x: 0, y: 90 },
    5: { x: -90, y: 0 },
    6: { x: 90, y: 0 }
  };
  
  function rollDice() {
    const roll = Math.floor(Math.random() * 6) + 1;
    const { x, y } = rotations[roll];
    dice.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
  }

dice.addEventListener("click", rollDice);