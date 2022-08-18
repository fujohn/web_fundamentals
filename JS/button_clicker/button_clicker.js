// like buttons already set as alert('value') is a built in funciton

// swithchlog turns login to logout and vice versa

function switchlog(element) {
    if (element.innerText == 'Login') {
        element.innerText = 'Logout';
    } else {
        element.innerText = 'Login';
    }
};

// hide makes the element disappear

function hide(element) {
    element.remove();
}