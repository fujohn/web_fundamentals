var start = true;
var displayValue = '0';
var storedValue = 0;
var sign = 'null';

console.log(document.querySelector('#display').innerText);


function press(btn) {
    if (btn != '.') {
        if (displayValue === '0') {
            displayValue = btn.toString();
            // storedValue = parseFloat(displayValue);
            console.log(displayValue);
            console.log(storedValue);
        } else {
            displayValue += btn.toString();
            // storedValue = parseFloat(displayValue);
            console.log(displayValue);
            console.log(storedValue);
        }
    } else {
        if (!(displayValue.includes('.'))) {
            displayValue += btn.toString();
            console.log(displayValue);
            console.log(storedValue);
        }
    }
    document.querySelector('#display').innerText = displayValue;
}

function setOP(symbol) {
    sign = symbol;
    console.log(sign);
    if (start) {
        storedValue = parseFloat(displayValue);
        start = false;
    } else {
        if (sign == '/') {
            if (parseFloat(displayValue) != 0) {
                storedValue /= parseFloat(displayValue);
            }
        } else if (sign == '*') {
            storedValue *= parseFloat(displayValue);
        } else if (sign == '+') {
            storedValue += parseFloat(displayValue);
        } else if (sign == '-') {
            storedValue -= parseFloat(displayValue);
        }
    }
    // storedValue = parseFloat(displayValue);
    displayValue = '0';
    document.querySelector('#display').innerText = storedValue;
    // console.log(displayValue);
    // console.log(storedValue);
}

function clr() {
    displayValue = '0';
    storedValue = 0;
    console.log(displayValue);
    console.log(storedValue);
    start = true;
}

function calculate() {
    console.log(storedValue + sign + displayValue + '=');
    if (!sign) {
        storedValue = parseFloat(displayValue);
    }
    if (sign == '/') {
        if (parseFloat(displayValue) != 0) {
            storedValue /= parseFloat(displayValue);
        }
    } else if (sign == '*') {
        storedValue *= parseFloat(displayValue);
    } else if (sign == '+') {
        storedValue += parseFloat(displayValue);
    } else if (sign == '-') {
        storedValue -= parseFloat(displayValue);
    }
    displayValue = '0';
    sign = null;
    console.log(storedValue);
    document.querySelector('#display').innerText = storedValue;
}