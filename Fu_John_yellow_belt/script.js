// funtion to removes button on click action
function removeButton(element) {
    element.remove();
}

// add 1 to the petting count for the pet on click
function addPet(petName) {
    var countElement = document.querySelector('#' + petName + ' span').innerText;
    var counter = parseInt(countElement);
    counter ++;
    document.querySelector('#' + petName + ' span').innerText = counter;
}

// changing the drop down will create an alert
function searchFor(element) {
    if (element.value == 'Any Pet'){
        alert('You are looking for any kind of pet');
    } else {
        alert('You are looking for a: ' + element.value);
    }
}