let count = 0;
const display = document.getElementById("row-count");
const plusButton = document.getElementById("plus-button");
const minusButton = document.getElementById("minus-button");

plusButton.addEventListener("click", function () {
    count++;
    display.textContent = count;
});

minusButton.addEventListener("click", function () {
    if (count > 0) {
        count--;
        display.textContent = count;
    }
});