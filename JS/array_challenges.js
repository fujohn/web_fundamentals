// 1. Always Hungry
function alwaysHungry(arr) {
    // your code here 
    var foodCount = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'food') {
            foodCount += 1;
            console.log('yummy');
        }
    }
    if (foodCount === 0) {
        console.log("I'm hungry")
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"




// 2. High Pass Filter
function highPass(arr, cutoff) {
    var filteredArr = [];
    // your code here
    for (i=0; i < arr.length; i++) {
        if (arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]




// 3. Better than Average
function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for (i=0; i < arr.length; i++) {
        sum += arr[i];
    }
    var average = sum / arr.length
    var count = 0
    // count how many values are greated than the average
    for (i=0; i < arr.length; i ++) {
        if (arr[i] > average) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4







// 4. Array Reverse
function reverse(arr) {
    // your code here
    var reversedList = [];
    for (i=arr.length-1; i >= 0; i--) {
        reversedList.push(arr[i]);
    }

    arr = reversedList;

    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]





// 5. Fibonacci numbers
function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    // your code here
    for (i=0; i < n; i++) {
        if (i > 1) {
            fibArr[i] = fibArr[i-2] + fibArr[i-1];
        }
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
