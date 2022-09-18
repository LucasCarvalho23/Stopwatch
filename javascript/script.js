class Stopwatch {

    constructor () {
        this.hours = document.querySelector ("#hours")
        this.minutes = document.querySelector ("#minutes")
        this.seconds = document.querySelector ("#seconds")
        this.milisec = document.querySelector ("#milisec") 
        
        this.start = document.querySelector ("#start")
        this.pause = document.querySelector ("#pause")
        this.reset = document.querySelector ("#reset")
        

        // Event Click
        this.start.addEventListener ("click", () => this.startBtn())
        this.pause.addEventListener ("click", () => this.pauseBtn())
        this.reset.addEventListener ("click", () => this.resetBtn())


        // Interação do teclado com os botões
        document.addEventListener("keypress", function(e) {
            if(e.key === 'a') {
                this.btn = document.querySelector("#start")
                this.btn.click();
            }
        });

        document.addEventListener("keypress", function(f) {
            if(f.key === 's') {
                this.btn2 = document.querySelector("#pause")
                this.btn2.click();
            }
        });

        document.addEventListener("keypress", function(g) {
            if(g.key === 'd') {
                this.btn3 = document.querySelector("#reset")
                this.btn3.click();
            }
        });


        // Initial State
        this.startButton = true
        this.firstIni()
    }


    // Initial State
    firstIni() {
        hours.innerHTML = `00`
        minutes.innerHTML = `00`
        seconds.innerHTML = `00`
        milisec.innerHTML = `00`
        this.milisec = 0
        this.seconds = 0
        this.minutes = 0
        this.hours = 0
    }


    // Button Start
    startBtn() {
        // Don't duplicate the start
        if (this.startButton == true) {
            this.startButton = false 
            this.stopWatchInterval()       
        } else {
            alert ('You already started the stopwatch.')
        }
    }


    // Button Pause
    pauseBtn() {
        clearInterval(this.interval)
        this.startButton = true 
    }


    // Button Reset
    resetBtn() {
        clearInterval(this.interval)
        this.startButton = true 
        this.firstIni()
    }


    // Call to the Stopwatch() the each 10 milisec.
    stopWatchInterval() {
        this.interval = setInterval(() => {
            this.milisec++
            milisec.innerHTML = this.twoDigits(this.milisec)
            this.makeHours()
        }, 10);
    } 


    // Logic to calc the stopwatch
    makeHours() {

        if (this.milisec == 60) {
            this.milisec = 0
            this.seconds++
            seconds.innerHTML = this.twoDigits(this.seconds)
        } else if (this.seconds == 60) {
            this.seconds = 0
            this.minutes++
            minutes.innerHTML = this.twoDigits(this.minutes)
        } else if (this.minutes == 60) {
            this.minutes = 0
            this.hours++
            hours.innerHTML = this.twoDigits(this.hours)
        
        }
    }


    // Put two digits in numbers with one digit
    twoDigits(digit) {
        
        if (digit < 10) {
            return '0' + digit
        } else {
            return digit
        }
    }

}

const stopwatch = new Stopwatch()