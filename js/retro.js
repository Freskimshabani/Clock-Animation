var retroHourDigit1 = document.getElementById('Retro--Hour__Digit--1');
var retroHourDigit2 = document.getElementById('Retro--Hour__Digit--2');

var retroMinuteDigit1 = document.getElementById('Retro--Minute__Digit--1');
var retroMinuteDigit2 = document.getElementById('Retro--Minute__Digit--2');

var retroSecondDigit1 = document.getElementById('Retro--Second__Digit--1');
var retroSecondDigit2 = document.getElementById('Retro--Second__Digit--2');

function digitChecker(clockDigitString, retroDigitSegments) {
    switch (clockDigitString) {
        case "1":
            numberOne(retroDigitSegments);
            break;
        case "2":
            numberTwo(retroDigitSegments);
            break;
        case "3":
            numberThree(retroDigitSegments);
            break;
        case "4":
            numberFour(retroDigitSegments);
            break;
        case "5":
            numberFive(retroDigitSegments);
            break;
        case "6":
            numberSix(retroDigitSegments);
            break;
        case "7":
            numberSeven(retroDigitSegments);
            break;
        case "8":
            numberEight(retroDigitSegments);
            break;
        case "9":
            numberNine(retroDigitSegments);
            break;
        case "0":
            numberZero(retroDigitSegments);
            break;
    }
}

function getDigitSegments(retroDigit) {
    retroDigitSegments = retroDigit.querySelectorAll('.retro--segment');
    return retroDigitSegments;
}

function retroClockFunction() {
    var time = new Date();
    var hours = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();

    var hoursString = hours.toString();
    var minsString = mins.toString();
    var secsString = secs.toString();

    if (hoursString.length < 2) {
        digitChecker("0", getDigitSegments(retroHourDigit1));
        digitChecker(hoursString[0], getDigitSegments(retroHourDigit2));
    } else {
        digitChecker(hoursString[0], getDigitSegments(retroHourDigit1));
        digitChecker(hoursString[1], getDigitSegments(retroHourDigit2));
    }

    if (minsString.length < 2) {
        digitChecker("0", getDigitSegments(retroMinuteDigit1));
        digitChecker(minsString[0], getDigitSegments(retroMinuteDigit2));
    } else {
        digitChecker(minsString[0], getDigitSegments(retroMinuteDigit1));
        digitChecker(minsString[1], getDigitSegments(retroMinuteDigit2));
    }

    if (secsString.length < 2) {
        digitChecker("0", getDigitSegments(retroSecondDigit1));
        digitChecker(secsString[0], getDigitSegments(retroSecondDigit2));
    } else {
        digitChecker(secsString[0], getDigitSegments(retroSecondDigit1));
        digitChecker(secsString[1], getDigitSegments(retroSecondDigit2));
    }
}

function numberOne(retroDigitSegments) {
    retroDigitSegments[0].classList.add('retro--on');
    retroDigitSegments[4].classList.add('retro--on');

    retroDigitSegments[1].classList.remove('retro--on');
    retroDigitSegments[2].classList.remove('retro--on');
    retroDigitSegments[3].classList.remove('retro--on');
    retroDigitSegments[5].classList.remove('retro--on');
    retroDigitSegments[6].classList.remove('retro--on');
}

function numberTwo(retroDigitSegments) {
    retroDigitSegments[0].classList.add('retro--on');
    retroDigitSegments[2].classList.add('retro--on');
    retroDigitSegments[3].classList.add('retro--on');
    retroDigitSegments[5].classList.add('retro--on');
    retroDigitSegments[6].classList.add('retro--on');

    retroDigitSegments[1].classList.remove('retro--on');
    retroDigitSegments[4].classList.remove('retro--on');
}

function numberThree(retroDigitSegments) {
    retroDigitSegments[0].classList.add('retro--on');
    retroDigitSegments[2].classList.add('retro--on');
    retroDigitSegments[3].classList.add('retro--on');
    retroDigitSegments[4].classList.add('retro--on');
    retroDigitSegments[6].classList.add('retro--on');

    retroDigitSegments[1].classList.remove('retro--on');
    retroDigitSegments[5].classList.remove('retro--on');
}

function numberFour(retroDigitSegments) {
    retroDigitSegments[0].classList.add('retro--on');
    retroDigitSegments[1].classList.add('retro--on');
    retroDigitSegments[3].classList.add('retro--on');
    retroDigitSegments[4].classList.add('retro--on');

    retroDigitSegments[6].classList.remove('retro--on');
    retroDigitSegments[2].classList.remove('retro--on');
    retroDigitSegments[5].classList.remove('retro--on');
}

function numberFive(retroDigitSegments) {
    retroDigitSegments[1].classList.add('retro--on');
    retroDigitSegments[2].classList.add('retro--on');
    retroDigitSegments[3].classList.add('retro--on');
    retroDigitSegments[4].classList.add('retro--on');
    retroDigitSegments[6].classList.add('retro--on');

    retroDigitSegments[0].classList.remove('retro--on');
    retroDigitSegments[5].classList.remove('retro--on');
}

function numberSix(retroDigitSegments) {
    retroDigitSegments[1].classList.add('retro--on');
    retroDigitSegments[2].classList.add('retro--on');
    retroDigitSegments[3].classList.add('retro--on');
    retroDigitSegments[4].classList.add('retro--on');
    retroDigitSegments[5].classList.add('retro--on');
    retroDigitSegments[6].classList.add('retro--on');

    retroDigitSegments[0].classList.remove('retro--on');
}

function numberSeven(retroDigitSegments) {
    retroDigitSegments[0].classList.add('retro--on');
    retroDigitSegments[2].classList.add('retro--on');
    retroDigitSegments[4].classList.add('retro--on');

    retroDigitSegments[1].classList.remove('retro--on');
    retroDigitSegments[3].classList.remove('retro--on');
    retroDigitSegments[5].classList.remove('retro--on');
    retroDigitSegments[6].classList.remove('retro--on');
}

function numberEight(retroDigitSegments) {
    retroDigitSegments[0].classList.add('retro--on');
    retroDigitSegments[1].classList.add('retro--on');
    retroDigitSegments[2].classList.add('retro--on');
    retroDigitSegments[3].classList.add('retro--on');
    retroDigitSegments[4].classList.add('retro--on');
    retroDigitSegments[5].classList.add('retro--on');
    retroDigitSegments[6].classList.add('retro--on');
}

function numberNine(retroDigitSegments) {
    retroDigitSegments[0].classList.add('retro--on');
    retroDigitSegments[1].classList.add('retro--on');
    retroDigitSegments[2].classList.add('retro--on');
    retroDigitSegments[3].classList.add('retro--on');
    retroDigitSegments[4].classList.add('retro--on');
    retroDigitSegments[6].classList.add('retro--on');

    retroDigitSegments[5].classList.remove('retro--on');
}

function numberZero(retroDigitSegments) {
    retroDigitSegments[0].classList.add('retro--on');
    retroDigitSegments[1].classList.add('retro--on');
    retroDigitSegments[2].classList.add('retro--on');
    retroDigitSegments[4].classList.add('retro--on');
    retroDigitSegments[5].classList.add('retro--on');
    retroDigitSegments[6].classList.add('retro--on');

    retroDigitSegments[3].classList.remove('retro--on');
}
const retroClockInterval = setInterval(retroClockFunction, 1000);