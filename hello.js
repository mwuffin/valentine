function die(){
    alert("Awesome Sauce!!!!");
    window.location.href = "yes/index.html"; // Replace with your desired link
}
function die2(){
    size();
    count = count * 1.5
    alert("Please Rethink Your Decision.");
}
var count = 100;
var stringYes = count + "px";
function size(){ 
    var element = document.getElementById('Yes');
    element.style.fontSize = '20px';
    stringYes = count + "px"
    element.style.width = stringYes;
    element.style.height = stringYes;
}
