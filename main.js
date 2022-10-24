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
const btnPercent = document.getElementById('btnPercent');
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

btnDivide.addEventListener("click", function() {
    currentOpperator = "divide";
    currentArr.push(parseInt(currentValue));
    currentValue = "";
});

btnMultiply.addEventListener("click", function() {
    currentOpperator = "multiply";
    currentArr.push(parseInt(currentValue));
    currentValue = "";
});

btnSubtract.addEventListener("click", function() {
    currentOpperator = "subtract";
    if (currentArr[0]) {
        currentValue = parseInt(currentArr[0]) - parseInt(currentValue);
        currentArr[0] = currentValue;
        updateDisplay();
        currentValue ="";
    } else {
    currentArr.push(parseInt(currentValue));
    currentValue = "";
    }
});

btnAdd.addEventListener("click", function() {
    currentOpperator = "add";
    if (currentArr[0]) {
        currentValue = parseInt(currentArr[0]) + parseInt(currentValue);
        currentArr[0] = currentValue;
        updateDisplay();
        currentValue ="";
    } else {
    currentArr.push(parseInt(currentValue));
    currentValue = "";
    }
});

btnSqrt.addEventListener("click", function() {
    currentValue = Math.sqrt(currentValue).toFixed(5);
    updateDisplay();
});

btnPercent.addEventListener("click", function() {
    currentOpperator = "percentOf";
    currentArr.push(parseInt(currentValue));
    currentValue = "";
});




btnEquals.addEventListener("click", function() {
    if (currentOpperator == "add") {
        currentArr.push(parseInt(currentValue));
        currentValue = add(currentArr);
        currentArr = [];
    } else if (currentOpperator == "subtract") {
        currentArr.push(parseInt(currentValue));
        currentValue = subtract(currentArr);
        currentArr = [];
    } else if (currentOpperator == "divide") {
        currentArr.push(parseInt(currentValue));
        currentValue = divide(currentArr);
        currentArr = [];
    } else if (currentOpperator == "multiply") {
        currentArr.push(parseInt(currentValue));
        currentValue = multiply(currentArr);
        currentArr = [];
    } else if (currentOpperator == "percentOf") {
        currentArr.push(parseInt(currentValue));
        currentValue = percentOf(currentArr);
        currentArr = [];
    } 
    updateDisplay();
});

function divide(currentArr) {
    return currentArr.reduce((a, b) => a / b);
}

function multiply(currentArr) {
    return currentArr.reduce((a, b) => a * b);
}

function subtract(currentArr) {
    return currentArr.reduce((a, b) => a - b);
}

function add(currentArr) {
    return currentArr.reduce((a, b) => a + b);
}

function percentOf(currentArr) {
    return currentArr.reduce((a, b) => (a/100) * b).toFixed(5);
}

function updateDisplay() {
    displayScreen.innerText = currentValue;
}
