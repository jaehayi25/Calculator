console.log("hello world!")

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
    return a / b; 
}

let mem = 6
let input = 3
let op = null
let clear = true  // determines if input should clear (set to 0) if new digit is pressed

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

const display = document.querySelector(".display"); 

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        clear = true
        console.log(button.textContent)
        console.log(button.textContent == '=')
        if (button.textContent == '=') {
            if (op) {
                input = operate(mem, op, input); 
                display.textContent = input; 
                op = null;
            }
        }
        else {
            op = button.textContent
            mem = input
        }
    });
});

digitButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if (clear) {
            input = 0
            clear = false
        }
        input = (input * 10) + parseInt(button.textContent); 
        console.log(input);
        display.textContent = input; 
    });
});


console.log(operate(mem, op, input))
console.log(add(mem, input))
console.log(subtract(mem, input))
console.log(multiply(mem, input))
console.log(divide(mem, input))
console.log(divide(mem, 3.5))