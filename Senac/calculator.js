let prompt = require('prompt-sync')();



console.log("Welcome to the JS calculator!");


let number1 = prompt("Enter you first number: ")

let number2 = prompt("Now, enter you second number: ")
let loop = false
let sum = (number1 + number2)
let subtraction = (number1 - number2)
let division = (number1 / number2)
let multiplication = (number1 * number2)

while(!loop){

    let operation = +prompt("What operation you wanna do? (+,-,/,*)")

    switch (operation) {

        case (operation == '+'):
            let sumResult = (number1 + " + " + number2 + " = " + sum);
            console.log(sumResult);
            loop = true;
            break;

        case (operation == '-'):
            let subResult = (number1 + " - " + number2 + " = " + subtraction);
            console.log(subResult);
            loop = true;
            break;

        case (operation == '/'):
            let divResult = (number1 + " / " + number2 + " = " + division);
            console.log(divResult);
            break;

        case (operation == '*'):
            let multResult = (number1 + " * " + number2 + " = " + multiplication);
            console.log(multResult);
            loop = true;
            break;

        default:
            console.log("Invalid option, try again:");
            
        
    }
}




