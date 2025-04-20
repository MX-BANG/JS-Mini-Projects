const colorBtns = document.querySelectorAll(".color-btn");
const colorCode = document.getElementById("color-code");

colorBtns.forEach(button => {
    button.addEventListener("click", () => {
        const color = button.getAttribute("data-color");
        document.body.style.backgroundColor = color;
        colorCode.innerText = color;
    });
});
