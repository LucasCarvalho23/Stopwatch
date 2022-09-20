class Alarm {

    constructor() {
        this.hoursAlarm = document.querySelector ("#hoursAlarm")
        this.minutesAlarm = document.querySelector ("#minutesAlarm")
        this.secondsAlarm = document.querySelector ("#secondsAlarm")
        this.ampmAlarm = document.querySelector ("#ampmAlarm")
        this.dateAlarm = document.querySelector ("#dateAlarm")
        this.changeLanguage = document.querySelector ("#changeLanguage")

        //Language: true => English // false => Portuguese
        this.validatorHour = true


        // Event Click
        this.changeLanguage.addEventListener ("click", () => this.changeBtn() )


        // Button active alarm
        this.btnAlarm = document.querySelector ("#btnAlarm")

        this.btnAlarm.addEventListener ("click", () => this.saveAlarm() )


        // Create Alarm
        this.hourAlarmF = document.querySelector ("#hourAlarmF")
        this.minuteAlarmF = document.querySelector("#minuteAlarmF")

        this.declarationsH()
        this.declarationsM()

    }


    // Receive the right hour.
    rightTime() {

        setInterval(() => {

            this.now = new Date()                

            this.hoursAlarm = this.now.getHours()
            this.minutesAlarm = this.now.getMinutes()
            this.secondsAlarm = this.now.getSeconds()


            // US Mode (true) or Br Mode (false)
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


    // Change language
    changeBtn() {
        if (this.validatorHour == false) {
            this.validatorHour = true    
        } else {
            this.validatorHour = false   
        }

        if (this.validatorHour == true) {
            // Muda img para btnImg2
            changeLanguage.src = "../images/btnImg1.png"    
        } else {
            // Muda img para btnImg1
            changeLanguage.src = "../images/btnImg2.png"

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


    // Test alarm
    alertAlarm() {

        

        // Test Alarm
        setInterval(() => {
            
            this.now2 = new Date()

            this.hourActual = this.now2.getHours()
            this.minuteActual = this.now2.getMinutes()

            if ((this.valuehFinal1 == this.hourActual) &&
                (this.valuemFinal1 == this.minuteActual)) {
                    alert ("Wake up!")
            }

        }, 1000);
    }


    // Declarations of the alarm in hours
    declarationsH() {
            this.valueh01 = document.querySelector ("#valueh01")
            this.valueh02 = document.querySelector ("#valueh02")
            this.valueh03 = document.querySelector ("#valueh03")
            this.valueh04 = document.querySelector ("#valueh04")
            this.valueh05 = document.querySelector ("#valueh05")
            this.valueh06 = document.querySelector ("#valueh06")
            this.valueh07 = document.querySelector ("#valueh07")
            this.valueh08 = document.querySelector ("#valueh08")
            this.valueh09 = document.querySelector ("#valueh09")
            this.valueh10 = document.querySelector ("#valueh10")
            this.valueh11 = document.querySelector ("#valueh11")
            this.valueh12 = document.querySelector ("#valueh12")
            this.valueh11 = document.querySelector ("#valueh11")
            this.valueh12 = document.querySelector ("#valueh12")
            this.valueh13 = document.querySelector ("#valueh13")
            this.valueh14 = document.querySelector ("#valueh14")
            this.valueh15 = document.querySelector ("#valueh15")
            this.valueh16 = document.querySelector ("#valueh16")
            this.valueh17 = document.querySelector ("#valueh17")
            this.valueh18 = document.querySelector ("#valueh18")
            this.valueh19 = document.querySelector ("#valueh19")
            this.valueh20 = document.querySelector ("#valueh20")
            this.valueh21 = document.querySelector ("#valueh21")
            this.valueh22 = document.querySelector ("#valueh22")
            this.valueh23 = document.querySelector ("#valueh23")
            
            this.valuehFinal = this.valueh11.value

    }


    // Declarations of the alarm in minutes
    declarationsM() {
        this.valuem000 = document.querySelector ("#valuem000")
        this.valuem001 = document.querySelector ("#valuem001")
        this.valuem002 = document.querySelector ("#valuem002")
        this.valuem003 = document.querySelector ("#valuem003")
        this.valuem004 = document.querySelector ("#valuem004")
        this.valuem005 = document.querySelector ("#valuem005")
        this.valuem006 = document.querySelector ("#valuem006")
        this.valuem007 = document.querySelector ("#valuem007")
        this.valuem008 = document.querySelector ("#valuem008")
        this.valuem009 = document.querySelector ("#valuem009")
        this.valuem010 = document.querySelector ("#valuem010")
        this.valuem011 = document.querySelector ("#valuem011")
        this.valuem012 = document.querySelector ("#valuem012")
        this.valuem013 = document.querySelector ("#valuem013")
        this.valuem014 = document.querySelector ("#valuem014")
        this.valuem015 = document.querySelector ("#valuem015")
        this.valuem016 = document.querySelector ("#valuem016")
        this.valuem017 = document.querySelector ("#valuem017")
        this.valuem018 = document.querySelector ("#valuem018")
        this.valuem019 = document.querySelector ("#valuem019")
        this.valuem020 = document.querySelector ("#valuem020")
        this.valuem021 = document.querySelector ("#valuem021")
        this.valuem022 = document.querySelector ("#valuem022")
        this.valuem023 = document.querySelector ("#valuem023")
        this.valuem024 = document.querySelector ("#valuem024")
        this.valuem025 = document.querySelector ("#valuem025")
        this.valuem026 = document.querySelector ("#valuem026")
        this.valuem027 = document.querySelector ("#valuem027")
        this.valuem028 = document.querySelector ("#valuem028")
        this.valuem029 = document.querySelector ("#valuem029")
        this.valuem030 = document.querySelector ("#valuem030")
        this.valuem031 = document.querySelector ("#valuem031")
        this.valuem032 = document.querySelector ("#valuem032")
        this.valuem033 = document.querySelector ("#valuem033")
        this.valuem034 = document.querySelector ("#valuem034")
        this.valuem035 = document.querySelector ("#valuem035")
        this.valuem036 = document.querySelector ("#valuem036")
        this.valuem037 = document.querySelector ("#valuem037")
        this.valuem038 = document.querySelector ("#valuem038")
        this.valuem039 = document.querySelector ("#valuem039")
        this.valuem040 = document.querySelector ("#valuem040")
        this.valuem041 = document.querySelector ("#valuem041")
        this.valuem042 = document.querySelector ("#valuem042")
        this.valuem043 = document.querySelector ("#valuem043")
        this.valuem044 = document.querySelector ("#valuem044")
        this.valuem045 = document.querySelector ("#valuem045")
        this.valuem046 = document.querySelector ("#valuem046")
        this.valuem047 = document.querySelector ("#valuem047")
        this.valuem048 = document.querySelector ("#valuem048")
        this.valuem049 = document.querySelector ("#valuem049")
        this.valuem050 = document.querySelector ("#valuem050")
        this.valuem051 = document.querySelector ("#valuem051")
        this.valuem052 = document.querySelector ("#valuem052")
        this.valuem053 = document.querySelector ("#valuem053")
        this.valuem054 = document.querySelector ("#valuem054")
        this.valuem055 = document.querySelector ("#valuem055")
        this.valuem056 = document.querySelector ("#valuem056")
        this.valuem057 = document.querySelector ("#valuem057")
        this.valuem058 = document.querySelector ("#valuem058")
        this.valuem059 = document.querySelector ("#valuem059")

        this.valuemFinal = this.valuem029.value

    }

    saveAlarm() {
        this.valuehFinal1 = this.valuehFinal
        this.valuemFinal1 = this.valuemFinal
        console.log (this.valuehFinal1, this.valuemFinal1)
    }

}

const alarm = new Alarm()

alarm.rightTime() // Start the watch
alarm.alertAlarm() // Start the alarm