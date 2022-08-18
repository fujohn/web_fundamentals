// when "edit profile" is clicked changeName() will change the name on the profile
function changeName() {
    var nameTag = document.querySelector('#profile .content h1')
    nameTag.innerText = "John Fu"
}

// save an array of requests in order, so function can remove one at a time
var requestList = document.querySelectorAll('.request h4')
var requestDiv = document.querySelectorAll('.request')
var requestCount = parseInt(document.querySelector('#requests .number').innerText)
var connectionCount = parseInt(document.querySelector('#connections .number').innerText)
console.log(requestList)
console.log(requestCount)
console.log(requestDiv)
console.log(connectionCount)

function acceptRequest(requestIndex) {
    console.log('Removing request from ' + requestList[requestIndex].innerText)
    requestDiv[requestIndex].remove();
    requestCount --;
    document.querySelector('#requests .number').innerText = requestCount;
    connectionCount ++;
    document.querySelector('#connections .number').innerText = connectionCount
}

function rejectRequest(requestIndex) {
    console.log('Removing request from ' + requestList[requestIndex].innerText)
    requestDiv[requestIndex].remove();
    requestCount --;
    document.querySelector('.number').innerText = requestCount;
}

// alternative to acceptRequest and rejectRequest: use if statement that meets 
// h4 element condition with name as parameter, then function does something 
// in that div