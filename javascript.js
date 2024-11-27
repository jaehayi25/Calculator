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
    
const buttons = document.querySelectorAll(".digit");

console.log(buttons)

const display = document.querySelector(".display"); 

buttons.forEach((button) => {
    button.addEventListener("click", () => {
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