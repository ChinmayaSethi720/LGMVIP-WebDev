function first(){
        document.getElementById("slide").src="image/beach.jpg";
    }
function second(){
    document.getElementById("slide").src="image/sunset.jpg";
}
function third(){
    document.getElementById("slide").src="image/mountain.jpg";
}
setInterval(first,2000);
setInterval(second,4000);
setInterval(third,6000);