const inputField = document.querySelector("input");
const buttons = document.querySelectorAll("button");
const equalsButton = document.querySelector("#equals");
const delButton = document.querySelector("#delete");
const powerButton = document.querySelector("#power");
const acButton = document.querySelector("#AC");
const operatorButtons = document.querySelectorAll("#division, #multiply, #minus, #plus", "#equals");
const decimalButton = document.querySelector("#decimal");


let input = ""; 
let operatorButtonsCounter = 0;

buttonPress();
clearButton();
operatorClickCounter ();
evaluate();
delOneChar();
powerOfTwo();
decimalSlicer ();
keyboardEnter ();




function add(number1, number2) {
    let sum = 0;
    
    sum = number1 + number2;
    return sum;
}

function sub(number1, number2) {
    let sum = 0;
    
    sum = number1 - number2;
    
    return sum;
}

function multiply(number1, number2) {
    let sum = 0;
    
    sum = number1 * number2;
    return sum;
}

function divide(number1, number2) {
    let sum = 0;
   
    if (number1 === 0 || number2 === 0) return inputField.value = "ERROR";
     sum = number1 / number2;
    if(sum.toString().includes(".")) return sum.toFixed(2);
        else return sum;
     
}

function decimalSlicer () {
    let decimalCounter = 0;
    decimalButton.addEventListener("click", () => {
        decimalCounter++;
        console.log(decimalCounter);
            if(decimalCounter>=2)  {
              inputField.value = inputField.value.slice(0, -1);
              return decimalCounter = 1;
            }
    })
    operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        return decimalCounter = 0;
    })
})
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
            input = inputField.value;
        });
    });
}

  function operatorClickCounter () {
    let splitArr =[];
    let splicedOperator = "";
    operatorButtons.forEach(button => {
        button.addEventListener("click", () => {
            operatorButtonsCounter++;
            console.log(operatorButtonsCounter);
                if (operatorButtonsCounter>=2) {
                    
                    splicedOperator = input.charAt(input.length-1);
                    console.log(splicedOperator);
                    input = input.slice(0, -1);
                    console.log(input.length);

                    if(input.includes("+")) {
                        splitArr = input.split("+")
                        console.log(splitArr);
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
                    
                     operatorButtonsCounter = 1; 
                     inputField.value +=splicedOperator;

                }
        })
    })    
}     

function powerOfTwo() {
    powerButton.addEventListener("click", () => {
        input = input.replace("x²", "");
        console.log(input);
        input = Number(input);
        return inputField.value = input*input;
    })
}



function clearButton() {
    acButton.addEventListener("click", () => {
         inputField.value = "";   
         input = [];
         operatorButtonsCounter = 0;
    })
}

function delOneChar(){
    delButton.addEventListener("click", () => {
       inputField.value = (inputField.value).slice(0, -4);
    })

    
}

function percent() {
    let splitArr = [];
    input = input.replace(/%|=/g, "");
    splitArr = input.split("*");
    return inputField.value = Number(((splitArr[0]/100) * splitArr[1]));  
}

function keyboardEnter () {
    document.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
          event.preventDefault();
          equalsButton.click();
        }
      });
}

function evaluate() {
    let splitArr = [];
    equalsButton.addEventListener("click", () => {
        operatorButtonsCounter =0;
        if (input.includes("%")) return percent();

        input = input.slice(0, -1);
        console.log(input);
        if(input.includes("+")) {
            splitArr = input.split("+")
            console.log(splitArr);
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

