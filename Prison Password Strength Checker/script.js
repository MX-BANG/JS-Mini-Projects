const passwordInput = document.getElementById("password");
const strengthBars = document.querySelectorAll(".bar");
const passwordStrength = document.getElementById("strength-text");

passwordInput.addEventListener("input", function(){
    const password = passwordInput.value;
    checkPasswordStrength(password);
});

function checkPasswordStrength(password){
    let strength = 0;

    if(password.length >= 8){
        strength++;
    }

    if(/[A-Z]/.test(password)){
        strength++;
    }

    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        strength++;
    }

    updateStrengthBars(strength);
}

function updateStrengthBars(strength){
    strengthBars.forEach(bar => bar.style.backgroundColor = "#e0e0e0");

    if (strength >= 1) {
        strengthBars[0].style.backgroundColor = "#FF5733"; // Weak
    }
    if (strength >= 2) {
        strengthBars[1].style.backgroundColor = "#F0E130"; // Medium
    }
    if (strength >= 3) {
        strengthBars[2].style.backgroundColor = "#33FF57"; // Strong
    }

    if (strength === 0) {
        passwordStrength.innerText = "Too short";
    } else if (strength === 1) {
        passwordStrength.innerText = "Weak";
    } else if (strength === 2) {
        passwordStrength.innerText = "Medium";
    } else if (strength === 3) {
        passwordStrength.innerText = "Strong";
    }
}