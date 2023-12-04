var hourDigit1 = document.getElementById("Hour__Digit--1");
var hourDigit2 = document.getElementById("Hour__Digit--2");

var hourDigit1Prev = document.getElementById("Hour__Digit--1__Prev");
var hourDigit2Prev = document.getElementById("Hour__Digit--2__Prev");

var minuteDigit1 = document.getElementById("Minute__Digit--1");
var minuteDigit2 = document.getElementById("Minute__Digit--2");

var minuteDigit1Prev = document.getElementById("Minute__Digit--1__Prev");
var minuteDigit2Prev = document.getElementById("Minute__Digit--2__Prev");

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
        secondDigit1.textContent = secondsString[0];
        secondDigit2.textContent = secondsString[1];
    }

    digitSwapper(secondsString[1], secondsString[1], secondDigit2, secondDigit2Prev);
    digitSwapper(secondsString[0], secondsString[0], secondDigit1, secondDigit1Prev);
    digitSwapper(minutesString[1], minutesString[1], minuteDigit2, minuteDigit2Prev);
    digitSwapper(minutesString[0], minutesString[0], minuteDigit1, minuteDigit1Prev);
    digitSwapper(hoursString[1], hoursString[1], hourDigit2, hourDigit2Prev);
    digitSwapper(hoursString[0], hoursString[0], hourDigit1, hourDigit1Prev);
}

function digitSwapper(digit1, digit2, digitDisplay1, digitDisplay1Prev) {
    var temp;
    temp = parseInt(digit1);
    digit1 = parseInt(digit2);
    digit2 = temp + 1;

    if (digit2 == 10) {
        digitDisplay1Prev.textContent = 0;
    }
    else {
        digitDisplay1Prev.textContent = digit2;
    }

    if (digitDisplay1 == "NaN") {
        digitDisplay1.textContent = 1;
    }
}

function digitAnimation(digitDisplay1, digitDisplay1Prev) {

}
const clockInterval = setInterval(digitSplitter, 1000);

console.log(seconds.toString());
console.log(minutes);
console.log(hours);
