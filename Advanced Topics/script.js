function scale(element, value) {
    element.style.transform = "scale(" + value + ")";
}

// the function below is equivalent to onclick="alert('Button clicked!)" in html, but for all buttons
var btns = document.querySelectorAll("button");
    
for(var i=0; i<btns.length; i++) {
    btns[i].addEventListener("click", function(){
        alert("Button clicked!");
    });
}

// jQuery equivalent to the above 
$("button").click(function() {
    alert("Button clicked");
});
