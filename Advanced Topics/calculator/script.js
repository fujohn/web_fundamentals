var displayValue = '0'
var storedValue = 0
function press(btn) {
    if (btn != '.') {
        if (displayValue === '0') {
            displayValue = btn.toString();
            storedValue = parseFloat(displayValue);
            console.log(displayValue);
            console.log(storedValue);
        } else {
            displayValue += btn.toString();
            storedValue = parseFloat(displayValue);
            console.log(displayValue);
            console.log(storedValue);
        }
    } else {
        if (!(displayValue.includes('.'))) {
            displayValue += btn.toString();
            storedValue = parseFloat(displayValue + 0);
            console.log(displayValue);
            console.log(storedValue);
        }
    }
}

function setOP(symbol) {

}

function clr() {

}

function calculate() {

}