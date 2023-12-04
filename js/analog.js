var analogClock = document.getElementById("Analog--Clock");
var analogClockDigits = analogClock.querySelectorAll('.analog--digit');

console.log(analogClockDigits);

var analogHourHand = document.getElementById("Analog--Clock__Hour--Hand");
var analogMinuteHand = document.getElementById("Analog--Clock__Minute--Hand");
var analogSecondHand = document.getElementById("Analog--Clock__Second--Hand");

function analogClockFunction() {
    var time = new Date();
    var hour = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();

    var hourToDeg = ((hour / 24) * 360) + 90;
    var minsToDeg = ((mins / 60) * 360) + 90;
    var secsToDeg = ((secs / 60) * 360) + 90;

    analogHourHand.style.transform = `rotateZ(${hourToDeg}deg)`;
    analogMinuteHand.style.transform = `rotateZ(${minsToDeg}deg)`;
    analogSecondHand.style.transform = `rotateZ(${secsToDeg}deg)`;
}



const analogInterval = setInterval(analogClockFunction, 1000)