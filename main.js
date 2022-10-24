const defaultOutput = 0;
const defaultValue = "";

const displayScreen = document.getElementById('display');

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btn0 = document.getElementById('btn0');

const btnClear = document.getElementById('btnClear');
const btnSqrt = document.getElementById('btnSqrt');
const btnRemainder = document.getElementById('btnRemainder');
const btnDivide = document.getElementById('btnDivide');
const btnMultiply = document.getElementById('btnMultiply');
const btnSubtract = document.getElementById('btnSubtract');
const btnAdd = document.getElementById('btnAdd');
const btnDecimal = document.getElementById('btnDecimal');
const btnEquals = document.getElementById('btnEquals');


let currentOutput = defaultOutput;
let currentValue = defaultValue;
let currentArr = [];
let currentOpperator = "";
let result = "";

if (currentValue == "") {
    displayScreen.innerText = defaultOutput;
}




btnClear.addEventListener("click", function() {
    currentValue = "";
    currentArr = [];
    displayScreen.innerText = defaultOutput;
});  


btn0.addEventListener("click", function() {
    currentValue = currentValue + "0";
    updateDisplay();
});
btn1.addEventListener("click", function() {
    currentValue = currentValue + "1";
    updateDisplay();
});
btn2.addEventListener("click", function() {
    currentValue = currentValue + "2";
    updateDisplay();
});
btn3.addEventListener("click", function() {
    currentValue = currentValue + "3";
    updateDisplay();
});
btn4.addEventListener("click", function() {
    currentValue = currentValue + "4";
    updateDisplay();
});
btn5.addEventListener("click", function() {
    currentValue = currentValue + "5";
    updateDisplay();
});
btn6.addEventListener("click", function() {
    currentValue = currentValue + "6";
    updateDisplay();
});
btn7.addEventListener("click", function() {
    currentValue = currentValue + "7";
    updateDisplay();
});
btn8.addEventListener("click", function() {
    currentValue = currentValue + "8";
    updateDisplay();
});
btn9.addEventListener("click", function() {
    currentValue = currentValue + "9";
    updateDisplay();
});
btnDecimal.addEventListener("click", function() {
    currentValue = currentValue + ".";
    updateDisplay();
});



btnAdd.addEventListener("click", function() {
    currentOpperator = "add";
    currentArr.push(parseInt(currentValue));
    currentValue = "";
});

btnSqrt.addEventListener("click", function() {
    currentValue = Math.sqrt(currentValue);
    updateDisplay();
});




btnEquals.addEventListener("click", function() {
    if (currentOpperator == "add") {
        currentArr.push(parseInt(currentValue));
        currentValue = add(currentArr);
        currentArr = [];
    }
    updateDisplay();
});


function add(currentArr) {
    return currentArr.reduce((a, b) => a + b, 0);
}

function updateDisplay() {
    displayScreen.innerText = currentValue;
}
