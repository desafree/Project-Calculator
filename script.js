let text = '';
let operatore = [];
let numbers = [];
let risultato;

const display = document.querySelector('.display');

//store number input in text
const number = document.querySelectorAll('.number');

for(let i=0; i< number.length; i++) {
    number[i].addEventListener('click', function(e) {
        text += e.target.innerText;
        printdisplay(text);
    })
}

//activate function mechanism
const functions = document.querySelectorAll('.function');

for(let h=0; h<functions.length; h++) {
    functions[h].addEventListener('click', function(e) {
        operatore[operatore.length] = e.target.innerText;
        console.log(operatore)
        numbers[numbers.length] = parseInt(text);
        console.log(numbers)
        text='';
        if(numbers.length == 2) {
            risultato = operation(numbers[0],numbers[1],operatore[0]);
            printdisplay(risultato);
            console.log(risultato)
            let a =operatore[1];
            operatore = [];
            operatore[0]=a;
            numbers = [];
            numbers[0] = risultato
            text = '';
        }
        
        
       
    })}


const uguale = document.querySelector('.uguale');
uguale.addEventListener('click', function() {
    let primo = numbers[0];
    let secondo = parseInt(text);
    let opera = operatore[0];
    let nico = operation(primo,secondo,opera);
    printdisplay(nico);
    numbers = [];
    operatore = [];
    text=nico;
})


const clean = document.querySelector('.clear');
clean.addEventListener('click', function() {
    clear();
    printdisplay(text)
})



// for(let h=0; h<functions.length; h++) {
//     functions[h].addEventListener('click', function(e) {
//         operatore = e.target.innerText;
//         if(numbers.length == 0) {
//             numbers[0] = parseInt(text);
//             text = '';
//             printdisplay(text);
//         }
//         else if(numbers.length == 1) {
//             numbers[1] = parseInt(text);
//             text = '';
//             printdisplay(text);
//             console.log(operatore);
//             console.log(numbers[0]);
//             console.log(numbers[1]);
//             numbers[0]= operation(numbers[0],numbers[1],operatore);
//             console.log(operatore);
//             console.log(numbers[0]);
//             console.log(numbers[1]);
//             numbers.splice(1,1);
//             printdisplay(text);
            
//         }
        
//     })
// }
































function division(number1,number2) {
    return Math.round((number1/number2) * 100) / 100;
}

function moltiplication(number1,number2) {
    return Math.round((number1*number2) * 100) / 100;
}

function subtraction(number1,number2) {
    return Math.round((number1-number2) * 100) / 100;
}

function addition(number1,number2) {
    return Math.round((number1+number2) * 100) / 100;
}

function operation(number1,number2,operator) {
    if(operator=='+') {
        return addition(number1,number2);
    }
    else if(operator=='-') {
        return subtraction(number1,number2);
    }
    else if(operator=='*') {
        return moltiplication(number1,number2);
    }
    else if(operator=='/') {
        return division(number1,number2);
    }
    else {
        alert('operator error') 
    }
}

function printdisplay(texts) {
    if(texts=='') {
        display.textContent=numbers[0];
    }
    else {
        display.textContent=texts;
    }
}

 function clear() {
    
    operatore = [];
    numbers = [];
    text = '0'

 }