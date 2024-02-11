function die(){
    alert("Awesome Sauce!!!!");
    window.open("https://www.youtube.com/watch?v=tyKu0uZS86Q&ab_channel=Laufey");
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
