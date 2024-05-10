const inputField = document.querySelector("input");
buttonPress();

function add(number1, number2) {
    let sum = 0;
    return sum = number1 + number2;
}

function sub(number1, number2) {
    let sum = 0;
    return sum = number1 - number2;
}

function multiply(number1, number2) {
    let sum = 0;
    return sum = number1 * number2;
}

function divide(number1, number2) {
    let sum = 0;
    return sum = number1 / number2;
}



function operate(number1, operator, number2) {

    if (operator === "+") {
       return add(number1, number2);
    } else if (operator === "-") {
        return sub(number1, number2);
    } else if (operator === "*") {
        return multiply(number1, number2);
    } else if (operator === "/") {
        return divide(number1, number2);
    }
}


    function buttonPress() {
        const buttons = document.querySelectorAll("button");
            buttons.forEach(button => {
                button.addEventListener("click", () => {
                return inputField.value += button.textContent;
                });
            })
     } 


