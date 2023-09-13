var hourDigit1 = document.getElementById("Hour__Digit--1");
var hourDigit2 = document.getElementById("Hour__Digit--2");

var minuteDigit1 = document.getElementById("Minute__Digit--1");
var minuteDigit2 = document.getElementById("Minute__Digit--2");

var secondDigit1 = document.getElementById("Second__Digit--1");
var secondDigit2 = document.getElementById("Second__Digit--2");

var secondDigit1Prev = document.getElementById("Second__Digit--1__Prev");
var secondDigit2Prev = document.getElementById("Second__Digit--2__Prev");


function digitSplitter() {
    var time = new Date();
    var seconds = time.getSeconds();
    var minutes = time.getMinutes();
    var hours = time.getHours();

    var hoursString = hours.toString();
    var minutesString = minutes.toString();
    var secondsString = seconds.toString();

    if (hoursString.length < 2) {
        hourDigit1.textContent = 0;
        hourDigit2.textContent = hoursString[0];
    } else {
        hourDigit1.textContent = hoursString[0];
        hourDigit2.textContent = hoursString[1];
    }

    if (minutesString.length < 2) {
        minuteDigit1.textContent = 0;
        minuteDigit2.textContent = minutesString[0];
    } else {
        minuteDigit1.textContent = minutesString[0];
        minuteDigit2.textContent = minutesString[1];
    }

    if (secondsString.length < 2) {
        secondDigit1.textContent = 0;
        secondDigit2.textContent = secondsString[0];
    } else {
        secondDigit2.textContent = secondsString[1];
        secondDigit1.textContent = secondsString[0];
    }

    digitSwapper(secondsString[1], secondsString[1], secondDigit1, secondDigit1Prev)
}

function digitSwapper(digit1, digit2, digitDisplay1, digitDisplay1Prev) {
    var temp;
    temp = digit1;
    digit1 = digit2;
    digit2 = temp;

}
const clockInterval = setInterval(digitSplitter, 1000);

console.log(seconds.toString());
console.log(minutes);
console.log(hours);
