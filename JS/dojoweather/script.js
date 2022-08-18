// alert functions for the cities on top is directly using the alert() function to display the loading message
var day_list = ['today', 'tomorrow', 'friday', 'saturday']
var highs_c = [24, 27, 21, 26]
var highs_f = [75, 80, 69, 78]
var lows_c = [18, 19, 16, 21]
var lows_f = [65, 66, 61, 70]

function convertTemps(element) {
    // console.log(element.value[1] == 'F'); 
    if (element.value[1] == 'C') {
        var highs = highs_c;
        var lows = lows_c;
    } else {
        var highs = highs_f;
        var lows = lows_f;
    }

    for (var i=0; i<day_list.length; i++) {
        var day_high = document.querySelector('#' + day_list[i] + ' .high span');
        day_high.innerText = highs[i];
        var day_low = document.querySelector('#' + day_list[i] + ' .low span');
        day_low.innerText = lows[i];
    }
}

// removes the entire footer div (the cookie warning)
function removeMessage() {
    var footer = document.querySelector('footer')
    footer.remove();
}
