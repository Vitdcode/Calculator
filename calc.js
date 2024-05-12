const inputField = document.querySelector("input");
const buttons = document.querySelectorAll("button");
const equalsButton = document.querySelector("#equals");
const delButton = document.querySelector("#delete");
const powerButton = document.querySelector("#power");
const acButton = document.querySelector("#AC");
const operatorButtons = document.querySelectorAll("#division, #multiply, #minus, #plus", "#equals");
const decimalButton = document.querySelector("#decimal");


let input = ""; 
let decimalUsed = false; //flag for tracking decimal presence in the Inputfield
let operatorisUsedTwice = false; // if any operator is used twice this is set to true and the pair of numbers are evaluated 

buttonPress();
clearButton();
deleteButton();
powerOfTwo();
keyboardEnter ();
operatorUsedTwiceEvaluation();
evaluateEqualsButton();
preventMultipleDecimals ();

//Calculation functions

function add(number1, number2) {
    let resultSum = 0;
    resultSum = number1 + number2;
    if(resultSum.toString().includes(".")) return inputField.value =  resultSum.toFixed(2);
        else return  inputField.value = resultSum;
};

function sub(number1, number2) {
    let resultSub = 0;
    resultSub = number1 - number2;
    if(resultSub.toString().includes(".")) return inputField.value = resultSub.toFixed(2);
        else return inputField.value = resultSub;
};

function multiply(number1, number2) {
    let resultMult = 0;
    resultMult = number1 * number2;
    if(resultMult.toString().includes(".")) return inputField.value = resultMult.toFixed(2);
        else return inputField.value = resultMult;
};

function divide(number1, number2) {
    let resultDiv = 0;
    if (number1 === 0 || number2 === 0) return inputField.value = "ERROR"; 
    resultDiv = number1 / number2;
    if(resultDiv.toString().includes(".")) return inputField.value = resultDiv.toFixed(2);
        else return inputField.value = resultDiv;
};

function percent() {
    let splitArr = [];
    input = input.replace(/%|=/g, "");
    splitArr = input.split("*");
    return inputField.value = Number(((splitArr[0]/100) * splitArr[1]));  
};

function powerOfTwo() {
    powerButton.addEventListener("click", () => {
        input = input.replace("x²", "");
        return inputField.value = input*input;
    });
};







//Button functionality functions

function buttonPress() {
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            inputField.value += button.textContent;
            input = inputField.value;
        });
    });
};

function clearButton() {
    acButton.addEventListener("click", () => {
         inputField.value = "";   
         input = [];
         decimalUsed = false;
         operatorisUsedTwice = false;
    });
};

function deleteButton(){
    delButton.addEventListener("click", () => {
       inputField.value = (inputField.value).slice(0, -4); //slicing the word "del" and one number
    });
};

function keyboardEnter () {
    document.addEventListener("keypress", function(event) {
        if (event.key === "Enter") return equalsButton.click();
    });
};


function preventMultipleDecimals () {
    decimalButton.addEventListener("click", () => {
        if(decimalUsed) return inputField.value = inputField.value.slice(0, -1);
        decimalUsed = true;
    });
    operatorButtons.forEach(button => button.addEventListener("click", () => decimalUsed = false));
};








//Evaluation functions

function operate() {
    operators = {    
        "+": (number1, number2) => add(number1, number2),
        "-": (number1, number2) => sub(number1, number2),
        "*": (number1, number2) => multiply(number1, number2),
        "/": (number1, number2) => divide(number1, number2)
        }
        for (let operator in operators) {   
            if(input.includes(operator)) {
            const [number1, number2] = input.split(operator).map(Number);
            operators[operator](number1, number2);
            }
        } 
  };

function operatorUsedTwiceEvaluation () {
    let splicedOperator = "";
    operatorButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (operatorisUsedTwice) {
                splicedOperator = input.charAt(input.length-1); //storing the operator, so it can be added to the InputField later again after the evaluation of the numbers
                input = input.slice(0, -1);
                operate(); // calling the operate function to evaluate the pair of numbers
                operatorisUsedTwice = false;
                inputField.value +=splicedOperator; 
            }
                operatorisUsedTwice = true;
        });
    });    
};     


function evaluateEqualsButton() {
    equalsButton.addEventListener("click", () => {
        if (input.includes("%")) return percent();
         input = input.slice(0, -1);
        operate()
        operatorisUsedTwice = false;
    });  
};

