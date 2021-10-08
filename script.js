let text = '';
let operatore;
let numbers = [];

const display = document.querySelector('.display');

//store number input in text
const number = document.querySelectorAll('.number');

for(let i=0; i< number.length; i++) {
    number[i].addEventListener('click', function(e) {
        text += e.target.innerText;
        display.textContent=text;
    })
}

//activate function mechanism
const functions = document.querySelectorAll('.function');
for(let h=0; h<functions.length; h++) {
    functions[h].addEventListener('click', function(e) {
        operatore = e.target.innerText;
        if(numbers.length == 0) {
            numbers[0] = parseInt(text);
            text = '';
            display.textContent=text;
        }
        else if(numbers.length == 1) {
            numbers[1] = parseInt(text);
            text = '';
            display.textContent=text;
        }
        console.log(text);
        console.log(numbers)
    })
}
































function division(number1,number2) {
    return number1/number2;
}

function moltiplication(number1,number2) {
    return number1*number2;
}

function subtraction(number1,number2) {
    return number1-number2;
}

function addition(number1,number2) {
    return number1+number2;
}

function operation(number1,number1,operator) {
    if(operator=='+') {
        return addition();
    }
    else if(operator=='-') {
        return subtraction();
    }
    else if(operator=='*') {
        return moltiplication();
    }
    else if(operator=='/') {
        return division();
    }
    else {
        alert('error operator');
    }
}
