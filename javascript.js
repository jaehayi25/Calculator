function add(a, b) {
    return a + b; 
}

function subtract(a, b) {
    return a - b; 
}

function multiply(a, b) {
    return a * b; 
}

function divide(a, b) {
    if (b == 0) return "lolz"; 
    return a / b; 
}

let mem = 0;
let input = 0; 
let op = null;
let clear = true;  // determines if input should clear (set to 0) if new digit is pressed

function operate(mem, op, input) {
    switch(op) {
        case '+': 
            return add(mem, input)
        case '-': 
            return subtract(mem, input)
        case '*': 
            return multiply(mem, input)
        case '/': 
            return divide(mem, input)
    }
}
    
const digitButtons = document.querySelectorAll(".digit");

const operatorButtons = document.querySelectorAll(".operator");

const clearButton = document.querySelector(".clear"); 

const display = document.querySelector(".display"); 

clearButton.addEventListener("click", () => {
        mem = 0; 
        input = 0; 
        op = null; 
        clear = true; 
        display.textContent = 0; 
    });

const textcolors = ["#008080", "#95424E", "#87CEEB", "#d3494e"]; 

display.style.color = textcolors[0]; 
clearButton.style.color = textcolors[3]; 

operatorButtons.forEach((button) => {
    button.style.color = textcolors[1]; 
    button.addEventListener("click", () => {
        clear = true;
        console.log(button.textContent);
        if (button.textContent == '=') {
            if (op) {
                input = operate(mem, op, input); 
                display.textContent = input; 
                op = null;
            }
        }
        else {
            op = button.textContent;
            mem = input;
        }
    });
});

digitButtons.forEach((button) => {
    button.style.color = textcolors[0]; 
    button.addEventListener("click", () => {
        if (clear) {
            input = 0;
            clear = false;
        }
        input = (input * 10) + parseInt(button.textContent); 
        console.log(input);
        display.textContent = input; 
    });
});