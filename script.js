const buttonPercent = document.querySelector(".percent");
const buttonAC = document.querySelector(".ac-button");
const button0 = document.querySelector(".zero");
const button1 = document.querySelector(".first");
const button2 = document.querySelector(".second");
const button3 = document.querySelector(".third");
const button4 = document.querySelector(".fourth");
const button5 = document.querySelector(".fifth");
const button6 = document.querySelector(".sixth");
const button7 = document.querySelector(".seventh");
const button8 = document.querySelector(".eighth");
const button9 = document.querySelector(".ninth");
const buttonPlus = document.querySelector(".plus");
const buttonSubtract = document.querySelector(".subtract");
const buttonMultiply = document.querySelector(".multiply");
const buttonDivide = document.querySelector(".divide");
const output = document.querySelector(".output");
const display = document.querySelector(".calc-field");
const buttons = document.querySelector("button");
const operator = document.querySelector(".operator");
const decimal = document.querySelector(".decimal");
const equals = document.querySelector(".equals");

let operatorSymbol = "";

equals.addEventListener("click", () => {
    if(operatorSymbol == '+') {
        const resultArray = output.textContent.split('+')
        display.textContent = Number(resultArray[0]) + Number(resultArray[1]);
    }else if (operatorSymbol == '-') {
        const resultArray = output.textContent.split('-')
        display.textContent = Number(resultArray[0]) - Number(resultArray[1]);
    }else if (operatorSymbol == '*') {
        const resultArray = output.textContent.split('*')
        display.textContent = Number(resultArray[0]) * Number(resultArray[1]);
    }else if (operatorSymbol == '/') {
        const resultArray = output.textContent.split('/')
        display.textContent = Number(resultArray[0]) / Number(resultArray[1]);
    }
})

// Mathematical Operators

buttonPlus.addEventListener("click", () => {
    display.textContent = '';
    output.innerHTML += '+';
    operatorSymbol = '+';
})

buttonSubtract.addEventListener("click", () => {
    display.textContent = '';
    output.innerHTML += '-';
    operatorSymbol = '-';
})

buttonMultiply.addEventListener("click", () => {
    display.textContent = '';
    output.innerHTML += '*';
    operatorSymbol = '*';
})

buttonDivide.addEventListener("click", () => {
    display.textContent = '';
    output.innerHTML += '/';
    operatorSymbol = '/';
})


// All Clear Button
buttonAC.addEventListener("click", () => {
    display.textContent = '';
    output.innerHTML = '';  
   })

// Number Buttons
button0.addEventListener("click", () => {
    display.textContent = Number(button0.value);
    output.innerHTML = '0';
})

button1.addEventListener("click", () => {
    display.textContent += Number(button1.value);
    output.innerHTML += '1';
})
button2.addEventListener("click", () => {
    display.textContent += Number(button2.value);
    output.innerHTML += '2';
})
button3.addEventListener("click", () => {
    display.textContent += Number(button3.value);
    output.innerHTML += '3';
})
button4.addEventListener("click", () => {
    display.textContent += Number(button4.value);
    output.innerHTML += '4';
})
button5.addEventListener("click", () => {
    display.textContent += Number(button5.value);
    output.innerHTML += '5';
})
button6.addEventListener("click", () => {
    display.textContent += Number(button6.value);
    output.innerHTML += '6';
})

button7.addEventListener("click", () => {
    display.textContent += Number(button7.value);
    output.innerHTML += '7';
})

button8.addEventListener("click", () => {
    display.textContent += Number(button8.value);
    output.innerHTML += '8';
})

button9.addEventListener("click", () => {
    display.textContent += Number(button9.value);
    output.innerHTML += '9';
})

button0.addEventListener("click", () => {
    display.textContent = Number(button0.value);
    output.innerHTML = '0';
})
    