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

displayScreen.innerText = defaultOutput;

document.addEventListener("click", function() {
    displayScreen.innerText = currentValue;
});

btnClear.onclick = () => currentValue = 0;

btn1.onclick = () => currentValue = currentValue + "1";
btn2.onclick = () => currentValue = currentValue + "2";
btn3.onclick = () => currentValue = currentValue + "3";
btn4.onclick = () => currentValue = currentValue + "4";
btn5.onclick = () => currentValue = currentValue + "5";
btn6.onclick = () => currentValue = currentValue + "6";
btn7.onclick = () => currentValue = currentValue + "7";
btn8.onclick = () => currentValue = currentValue + "8";
btn9.onclick = () => currentValue = currentValue + "9";
btn0.onclick = () => currentValue = currentValue + "0";
btnDecimal.onclick = () => currentValue = currentValue + ".";

btnAdd.addEventListener("click", function() {
    currentOpperator = "add";
    currentArr.push(parseInt(currentValue));
    currentValue = "";
});

btnEquals.addEventListener("click", function() {
    if (currentOpperator == "add") {
        result = add(currentArr);
        currentValue = result;
    }
});



function add(currentArr) {
    return currentArr.reduce((a, b) => a + b, 0);
}