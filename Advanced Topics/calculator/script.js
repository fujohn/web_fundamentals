var displayValue = '0';
var storedValue = 0;
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
}

function setOP(symbol) {
    if (symbol == '/') {
        if (parseFloat(displayValue) != 0) {
            storedValue /= parseFloat(displayValue);
        }
    } else if (symbol == '*') {
        storedValue *= parseFloat(displayValue);
    } else if (symbol == '+') {
        storedValue += parseFloat(displayValue);
    } else if (symbol == '-') {
        storedValue -= parseFloat(displayValue);
    }
    // storedValue = parseFloat(displayValue);
    displayValue = '0';
    // console.log(displayValue);
    // console.log(storedValue);
}

function clr() {
    displayValue = '0';
    storedValue = 0;
}

function calculate() {

}