const inputField = document.querySelector("input");
const buttons = document.querySelectorAll("button");
const equalsButton = document.querySelector("#equals");
const delButton = document.querySelector("#delete");

let input = ""; 

buttonPress();
clearButton();
evaluate();
delOneChar();


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
            return inputField.value = add(number1, number2);
         } else if (operator === "-") {
             return inputField.value = sub(number1, number2);
         } else if (operator === "*") {
             return inputField.value = multiply(number1, number2);
         } else if (operator === "/") {
             return inputField.value = divide(number1, number2);
         }
     
}


function buttonPress() {
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            inputField.value += button.textContent;
            console.log(typeof inputField.value);
            input = inputField.value;
        });
    });
}

function clearButton() {
    const acButton = document.querySelector("#AC");
    acButton.addEventListener("click", () => {
         inputField.value = "";   
         input = [];
    })
}

function delOneChar(){
    delButton.addEventListener("click", () => {
       inputField.value = (inputField.value).slice(0, -4);
    })

    
}

function percent() {
    let sum = 0;
    let splitArr = [];
    input = input.replace(/%|=/g, "");
    console.log(input);
    splitArr = input.split("*");
    return inputField.value = Number(((splitArr[0]/100) * splitArr[1]));  
}


function evaluate() {
    let splitArr = [];
    equalsButton.addEventListener("click", () => {
        if (input.includes("%")) return percent();
        input = input.replace("=", "");
        if(input.includes("+")) {
            splitArr = input.split("+")
            operate(Number(splitArr[0]), "+", Number(splitArr[1]));
        } else if(input.includes("-")) {
            splitArr = input.split("-")
            operate(Number(splitArr[0]), "-", Number(splitArr[1]));
        } else if(input.includes("*")) {
            splitArr = input.split("*")
            operate(Number(splitArr[0]), "*", Number(splitArr[1]));
        } else if(input.includes("/")) {
            splitArr = input.split("/")
            operate(Number(splitArr[0]), "/", Number(splitArr[1]));
        } 
    })   
}

