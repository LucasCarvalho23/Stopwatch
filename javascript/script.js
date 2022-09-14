// Dec to var
let stopwatch = document.querySelector ("#stopwatch")

let hours = document.querySelector ("#hours")
let minutes = document.querySelector ("#minutes")
let seconds = document.querySelector ("#seconds")
let milisec = document.querySelector ("#milisec")


// Initial State
firstIni()


/* 
    Start the stopwatch: Used "setInterval" em 10 miliseconds to increment the clock. Used "If" to each 60 milisec, 60 sec or 60 min increment 1 sec, 1 min or 1 hour.
*/
function start() {
    firstIni()
    stopwatchInterval()
}


// Pause the stopwatch
function pause() {
    clearInterval(this.interval)
}


// Reset the stopwatch
function reset() {
    clearInterval(this.interval)
    firstIni()
}



// Initial State
function firstIni() {
    hours.innerHTML = `00`
    minutes.innerHTML = `00`
    seconds.innerHTML = `00`
    milisec.innerHTML = `00`
    this.milisec = 0
    this.seconds = 0
    this.minutes = 0
    this.hours = 0
}


// Put two digits in stopwatch
function twoDigits(digit) {
    if (digit < 10) {
        return '0' + digit
    } else {
        return digit
    }
}


// Logic to stopwatch
function makeHours() {
    if (this.milisec == 60) {
        this.milisec = 0
        this.seconds++
        seconds.innerHTML = twoDigits(this.seconds)
    } else if (this.seconds == 60) {
        this.seconds = 0
        this.minutes++
        minutes.innerHTML = twoDigits(this.minutes)
    } else if (this.minutes == 60) {
        this.minutes = 0
        this.hours++
        hours.innerHTML = twoDigits(this.hours)
    }
}


// Call to the stopwatch
function stopwatchInterval() {
    this.interval = setInterval(() => {
        this.milisec++
        milisec.innerHTML = twoDigits(this.milisec)
        makeHours()
    }, 10);
}