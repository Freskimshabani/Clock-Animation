var classicClock = document.getElementById('Classic--Clock');
var classicClockButton = document.getElementById("Classic--Clock__Button");
var retroClock = document.getElementById("Retro--Clock");
var retroClockButton = document.getElementById("Retro--Clock__Button");
var analogClock = document.getElementById('Analog--Clock');
var analogClockButton = document.getElementById('Analog--Clock__Button');


analogClockButton.addEventListener('click', () => {
    analogClock.classList.toggle('hide');
})

classicClockButton.addEventListener('click', () => {
    classicClock.classList.toggle('hide');
})

retroClockButton.addEventListener('click', () => {
    retroClock.classList.toggle('hide');
})