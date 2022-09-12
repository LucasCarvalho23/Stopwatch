let stopwatch = document.querySelector ("#stopwatch")
let log = document.querySelector ("#log")

let hours = document.querySelector ("#hours")
let minutes = document.querySelector ("#minutes")
let seconds = document.querySelector ("#seconds")
let milisec = document.querySelector ("#milisec")

reset()


/* 
    Start the stopwatch: Used "setInterval" em 10 miliseconds to increment the clock. Used "If" to each 60 milisec, 60 sec or 60 min increment 1 sec, 1 min or 1 hour.
*/

function start() {
    this.milisec = 0
    this.seconds = 0
    this.minutes = 0
    this.hours = 0

    setInterval(() => {
        this.milisec++
        milisec.innerHTML = this.milisec

        if (this.milisec == 60) {
            this.milisec = 0
            this.seconds++
            seconds.innerHTML = this.seconds
        } else if (this.seconds == 60) {
            this.seconds = 0
            this.minutes++
            minutes.innerHTML = this.minutes
        } else if (this.minutes == 60) {
            this.minutes = 0
            this.hours++
            hours.innerHTML = this.hours
        }

    }, 10);
}


// Pause the stopwatch
function pause() {
    //Code
}


// Reset the stopwatch
function reset() {
    hours.innerHTML = `00`
    minutes.innerHTML = `00`
    seconds.innerHTML = `00`
    milisec.innerHTML = `00`
    this.milisec = 0
}