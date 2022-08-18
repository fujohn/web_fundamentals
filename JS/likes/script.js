test = "#comment-" + 1 + " span";
console.log(parseInt(document.querySelector(test).innerText) + 234);

function addLike(commentNumber) {
    var commentor = "#comment-" + commentNumber + " h3"
    var commentId = "#comment-" + commentNumber + " span"
    var count = parseInt(document.querySelector(commentId).innerText)
    var countElement = document.querySelector(commentId)
    console.log("add 1 like to " + document.querySelector(commentor).innerText);
    count++;
    countElement.innerText = count;
}