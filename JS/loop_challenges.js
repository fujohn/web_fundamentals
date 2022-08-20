// 1. print odds 1-20
function printOdds() {
    for (var i = 1; i <= 20; i++) {
        if (i % 2 == 1) {
            console.log(i);
        }
    }
}

console.log('Answer to Q1: ');
printOdds();

// 2. print decreasing multiples of 3 from 100 to 0
function decreasingMultiplesThree() {
    for (var i = 100; i >= 0; i--) {
        if (i % 3 == 0) {
            console.log(i);
        }
    }
}

console.log('Answer to Q2: ');
decreasingMultiplesThree();

// 3. print values in sequence [4, 2.5, 1, -0.5, -2, -3.5]
var sequence = [4, 2.5, 1, -0.5, -2, -3.5];

function printSequence(array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

console.log('Answer to Q3: ');
printSequence(sequence);

// 4. print result of sum from 1 to 100 (sigma, should get 5050)
function sigma(first, last) {
    var sum = 0;
    for (var i = first; i <= last; i++) {
        sum += i;
    }
    return sum;
}

console.log('Answer to Q4: ');
console.log (sigma(1,100));


// 5. print result of factorial of 1 to 12 (should get 479001600)
function factorial(last, first = 1) {
    var product = 0;
    for (var i = first; i <= last; i++) {
        if (i == first) {
            product += i;
        } else {
            product *= i;
        }
    }
    return product;
}

console.log('Answer to Q5: ');
console.log(factorial(12));
