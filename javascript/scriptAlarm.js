export default class Alarm {

    constructor() {
        this.hoursAlarm = document.querySelector ("#hoursAlarm")
        this.minutesAlarm = document.querySelector ("#minutesAlarm")
        this.secondsAlarm = document.querySelector ("#secondsAlarm")
        this.ampmAlarm = document.querySelector ("#ampmAlarm")
        this.dateAlarm = document.querySelector ("#dateAlarm")

    }


    // Receive the right hour.
    rightTime() {

        setInterval(() => {

            this.now = new Date()

            this.hoursAlarm = this.now.getHours()
            this.minutesAlarm = this.now.getMinutes()
            this.secondsAlarm = this.now.getSeconds()


            // US Mode (true) or Br Mode (false)
            this.validatorHour = true   
            this.hoursAlarm = this.englishMode()

            // Hour
            hoursAlarm.innerHTML = this.twoDigits (this.hoursAlarm)
            minutesAlarm.innerHTML = this.twoDigits (this.minutesAlarm)
            secondsAlarm.innerHTML = this.twoDigits (this.secondsAlarm)
            ampmAlarm.innerHTML = `${this.ampmAlarm}`


            //Call the Date
            this.dayRight()

        }, 1000);
        
    }


    // US Mode => Insert AM and PM too
    englishMode() {
        if (this.validatorHour == true) {
            if (this.hoursAlarm > 12) {
                this.hoursAlarm = this.hoursAlarm - 12
                this.ampmAlarm = `PM`
            } else {
                this.ampmAlarm = `AM`
            }
        } else {
            this.ampmAlarm = ` `
        }

        return this.hoursAlarm
    }


    // Print Date bellow the hours
    dayRight() {
        this.yearAlarm = this.now.getFullYear()
        this.monthAlarm = this.now.getMonth()
        this.dayAlarm = this.now.getDate()

        this.monthAlarm = this.monthOfYear()
        this.datesAlarm = this.dayOfWeek()
        this.abrev = this.abrevDay()

        if (this.validatorHour == true) {
            dateAlarm.innerHTML = `${this.yearAlarm}, ${this.monthAlarm} ${this.dayAlarm}${this.abrev}, ${this.datesAlarm}`
        } else {
            dateAlarm.innerHTML = `${this.dayAlarm} de ${this.monthAlarm} de ${this.yearAlarm}. ${this.datesAlarm}`
        }
    } 


    // Define ordinal number
    abrevDay() {
        
        if (this.dayAlarm == 1) {
            this.abrev = 'st'
        } else if (this.dayAlarm == 2) {
            this.abrev = 'nd'
        } else if (this.dayAlarm == 3) {
            this.abrev = 'rd'
        } else {
            this.abrev = 'th'
        }

        return this.abrev
    }


    // Put two digits in numbers with one digit
    twoDigits(digit) {
        
        if (digit < 10) {
            return '0' + digit
        } else {
            return digit
        }
    }


    // Calc day of week
    dayOfWeek() {
        
        this.datesAlarm = this.now.getDay()

        if (this.validatorHour == true) {

            switch (this.datesAlarm) {
                case 0: 
                    this.datesAlarm = 'Sunday'
                break
                case 1: 
                    this.datesAlarm = 'Monday'
                break
                case 2: 
                    this.datesAlarm = 'Tuesday'
                break
                case 3: 
                    this.datesAlarm = 'Wednesday'
                break
                case 4: 
                    this.datesAlarm = 'Thursday'
                break
                case 5: 
                    this.datesAlarm = 'Friday'
                break
                case 6: 
                    this.datesAlarm = 'Saturday'
                break
            }

        } else {

            switch (this.datesAlarm) {
                case 0: 
                    this.datesAlarm = 'Domingo'
                break
                case 1: 
                    this.datesAlarm = 'Segunda-feira'
                break
                case 2: 
                    this.datesAlarm = 'Terça-feira'
                break
                case 3: 
                    this.datesAlarm = 'Quarta-feira'
                break
                case 4: 
                    this.datesAlarm = 'Quinta-feira'
                break
                case 5: 
                    this.datesAlarm = 'Sexta-feira'
                break
                case 6: 
                    this.datesAlarm = 'Sábado'
                break
            }

        }

        return this.datesAlarm
    }


    // Calc mounth of year
    monthOfYear() {
        
        if (this.validatorHour == true) {

            switch (this.monthAlarm) {
                case 0: 
                    this.monthAlarm = 'January'
                break
                case 1: 
                    this.monthAlarm = 'February'
                break
                case 2: 
                    this.monthAlarm = 'March'
                break
                case 3: 
                    this.monthAlarm = 'April'
                break
                case 4: 
                    this.monthAlarm = 'May'
                break
                case 5: 
                    this.monthAlarm = 'June'
                break
                case 6: 
                    this.monthAlarm = 'July'
                break
                case 7: 
                    this.monthAlarm = 'August'
                break
                case 8: 
                    this.monthAlarm = 'September'
                break
                case 9: 
                    this.monthAlarm = 'October'
                break
                case 10: 
                    this.monthAlarm = 'November'
                break
                case 11: 
                    this.monthAlarm = 'December'
                break
            }

        } else {

            switch (this.monthAlarm) {
                case 0: 
                    this.monthAlarm = 'Janeiro'
                break
                case 1: 
                    this.monthAlarm = 'Fevereiro'
                break
                case 2: 
                    this.monthAlarm = 'Março'
                break
                case 3: 
                    this.monthAlarm = 'Abril'
                break
                case 4: 
                    this.monthAlarm = 'Maio'
                break
                case 5: 
                    this.monthAlarm = 'Junho'
                break
                case 6: 
                    this.monthAlarm = 'Julho'
                break
                case 7: 
                    this.monthAlarm = 'Agosto'
                break
                case 8: 
                    this.monthAlarm = 'Setembro'
                break
                case 9: 
                    this.monthAlarm = 'Outubro'
                break
                case 10: 
                    this.monthAlarm = 'Novembro'
                break
                case 11: 
                    this.monthAlarm = 'Dezembro'
                break
            }

        }

        return this.monthAlarm
    }


}

const alarm = new Alarm()
alarm.rightTime()