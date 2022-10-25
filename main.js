// Calculator display screen variable
const displayScreen = document.getElementById('display');

// Calculator button variables
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

// setting default runtime variables
const defaultOutput = 0;
let currentValue = 0;
let currentArr = [];
let currentOpperator = "";

// Clear button functionality 
btnClear.addEventListener("click", function() {
    currentValue = "";
    currentArr = [];
    displayScreen.innerText = defaultOutput;
});  

// Number buttons functionality 
btn0.addEventListener("click", function() {
    currentValue = currentValue + "0";
    updateDisplay();
});
btn1.addEventListener("click", function() {
    if (typeof(currentValue) == 'string') {
        currentValue = currentValue + "1";
    } else {
        currentValue = "1";
    }
    updateDisplay();
});
btn2.addEventListener("click", function() {
    if (typeof(currentValue) == 'string') {
        currentValue = currentValue + "2";
    } else {
        currentValue = "2";
    }
    updateDisplay();
});
btn3.addEventListener("click", function() {
    if (typeof(currentValue) == 'string') {
        currentValue = currentValue + "3";
    } else {
        currentValue = "3";
    }
    updateDisplay();
});
btn4.addEventListener("click", function() {
    if (typeof(currentValue) == 'string') {
        currentValue = currentValue + "4";
    } else {
        currentValue = "4";
    }
    updateDisplay();
});
btn5.addEventListener("click", function() {
    if (typeof(currentValue) == 'string') {
        currentValue = currentValue + "5";
    } else {
        currentValue = "5";
    }
    updateDisplay();
});
btn6.addEventListener("click", function() {
    if (typeof(currentValue) == 'string') {
        currentValue = currentValue + "6";
    } else {
        currentValue = "6";
    }
    updateDisplay();
});
btn7.addEventListener("click", function() {
    if (typeof(currentValue) == 'string') {
        currentValue = currentValue + "7";
    } else {
        currentValue = "7";
    }
    updateDisplay();
});
btn8.addEventListener("click", function() {
    if (typeof(currentValue) == 'string') {
        currentValue = currentValue + "8";
    } else {
        currentValue = "8";
    }
    updateDisplay();
});
btn9.addEventListener("click", function() {
    if (typeof(currentValue) == 'string') {
        currentValue = currentValue + "9";
    } else {
        currentValue = "9";
    }
    updateDisplay();
});
btnDecimal.addEventListener("click", function() {
    if (currentValue > Math.floor(currentValue)) {
        currentValue = currentValue;
    } else if (typeof(currentValue) == 'string') {
        currentValue = currentValue + ".";
    } else {
        currentValue = ".";
    }
    updateDisplay();
});

// Operator button functionality 
btnDivide.addEventListener("click", function() {
    operate();
    currentOpperator = "divide";
    if (currentValue === "") {
        return false;
    } else if (currentArr[0]) {
        currentValue = parseFloat(currentArr[0]) / parseFloat(currentValue);
        currentArr[0] = currentValue;
        updateDisplay();
        currentValue = "";
    } else {
    currentArr.push(parseFloat(currentValue));
    currentValue = "";
    }
});

btnMultiply.addEventListener("click", function() {
    operate();
    currentOpperator = "multiply";
    if (currentValue === "") {
        return false;
    } else if (currentArr[0]) {
        currentValue = parseFloat(currentArr[0]) * parseFloat(currentValue);
        currentArr[0] = currentValue;
        updateDisplay();
        currentValue = "";
    } else {
    currentArr.push(parseFloat(currentValue));
    currentValue = "";
    }
});

btnSubtract.addEventListener("click", function() {
    operate();
    currentOpperator = "subtract";
    if (currentValue === "") {
        return false;
    } else if (currentArr[0]) {
        currentValue = parseFloat(currentArr[0]) - parseFloat(currentValue);
        currentArr[0] = currentValue;
        updateDisplay();
        currentValue ="";
    } else {
    currentArr.push(parseFloat(currentValue));
    currentValue = "";
    }
});

btnAdd.addEventListener("click", function() {
    operate();
    currentOpperator = "add";
    if (currentValue === "") {
        return false;
    } else if (currentArr[0]) {
        currentValue = parseFloat(currentArr[0]) + parseFloat(currentValue);
        currentArr[0] = currentValue;
        updateDisplay();
        currentValue = "";
    } else {
    currentArr.push(parseFloat(currentValue));
    currentValue = "";
    }
});

btnSqrt.addEventListener("click", function() {
    operate()
    currentOpperator = "sqrt"
    currentValue = Math.sqrt(currentValue).toFixed(5);
    currentValue = parseFloat(currentValue);
    updateDisplay();
});

btnPercent.addEventListener("click", function() {
    currentOpperator = "percentOf";
    currentArr.push(parseFloat(currentValue));
    currentValue = "";
});

btnEquals.addEventListener("click", function() {
    if (currentValue) {
        operate();
        updateDisplay();
        currentArr = [];
    } else {
        currentValue = currentArr[0];
        updateDisplay();
        currentValue = "";
    }
});

// Operator function
function operate() {
    if (currentValue === "") {
        return false;
    } else if (currentOpperator == "add") {
        currentArr.push(parseFloat(currentValue));
        currentValue = add(currentArr);
        currentArr = [];
    } else if (currentOpperator == "subtract") {
        currentArr.push(parseFloat(currentValue));
        currentValue = subtract(currentArr);
        currentArr = [];
    } else if (currentOpperator == "divide") {
        currentArr.push(parseFloat(currentValue));
        currentValue = divide(currentArr);
        currentArr = [];
    } else if (currentOpperator == "multiply") {
        currentArr.push(parseFloat(currentValue));
        currentValue = multiply(currentArr);
        currentArr = [];
    } else if (currentOpperator == "percentOf") {
        currentArr.push(parseFloat(currentValue));
        currentValue = percentOf(currentArr);
        currentArr = [];
    } 
    updateDisplay();
}

// Various math functions
function divide(currentArr) {
    let result = currentArr.reduce((a, b) => a / b);
    return limitCharLength(result);
}

function multiply(currentArr) {
    let result = currentArr.reduce((a, b) => a * b);
    return limitCharLength(result);
}

function subtract(currentArr) {
    let result = currentArr.reduce((a, b) => a - b);
    return limitCharLength(result);
}

function add(currentArr) {
    let result = currentArr.reduce((a, b) => a + b);
    return limitCharLength(result);
}

function percentOf(currentArr) {
    let result = currentArr.reduce((a, b) => (a/100) * b).toFixed(5);
    return limitCharLength(result);
}

// Function to update values and results on the display
function updateDisplay() {
    if (currentValue === Infinity) {
        displayScreen.innerText = "Nonsense!";
    } else if (currentValue === NaN || currentValue === 'NaN' || currentValue > 9999999999) {
        displayScreen.innerText = "error";
        currentArr = [];
        currentValue = "";
    } else if (currentValue == "") {
        displayScreen.innerText = defaultOutput;
    } else {
        displayScreen.innerText = currentValue;
    }
    if (currentValue.length > 9) {
        currentValue = currentValue.substring(0,9);
    }
}

// Function to keep numbers from overflowing display
function limitCharLength(num) {
    let str = num.toString();
    return str.substring(0,9);
}

// Set initial display value to 0
updateDisplay();