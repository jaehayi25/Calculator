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
let op = "+"
let clear = true  // determines if input should clear (set to 0) if new digit is pressed

function operate(mem, op, input) {
    switch(op) {
        case '+': 
            add(mem, input)
            break;
        case '-': 
            subtract(mem, input)
            break; 
        case '*': 
            multiply(mem, input)
            break; 
        case '/': 
            divide(mem, input)
            break; 
    }
}
    
const digitButtons = document.querySelectorAll(".digit");

const operatorButtons = document.querySelectorAll(".operator");

const display = document.querySelector(".display"); 

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        clear = true
        switch(button.textContent) {

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