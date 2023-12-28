const timeObject = {
    hours: 0,
    minutes: 0,
    seconds: 0,

   
    displayTime: function () {
        const formattedHours = this.formatNumber(this.hours);
        const formattedMinutes = this.formatNumber(this.minutes);
        const formattedSeconds = this.formatNumber(this.seconds);

        return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    },

    // Metoda për të ndryshuar kohën sipas numrit të dhënë të sekondave
    changeTimeBySeconds: function (seconds) {
        this.seconds += seconds;

        while (this.seconds >= 60) {
            this.seconds -= 60;
            this.minutes += 1;
        }

        while (this.minutes >= 60) {
            this.minutes -= 60;
            this.hours += 1;
        }

        while (this.hours >= 24) {
            this.hours -= 24;
        }
    },

    changeTimeByMinutes: function (minutes) {
        this.minutes += minutes;

        while (this.minutes >= 60) {
            this.minutes -= 60;
            this.hours += 1;
        }

        while (this.hours >= 24) {
            this.hours -= 24;
        }
    },

    
    changeTimeByHours: function (hours) {
        this.hours += hours;

        while (this.hours >= 24) {
            this.hours -= 24;
        }
    },

    
    formatNumber: function (number) {
        return number < 10 ? '0' + number : String(number);
    }
};


console.log('Koha fillestare:', timeObject.displayTime());

timeObject.changeTimeBySeconds(30);
console.log('Pas shtimit të 30 sekondave:', timeObject.displayTime());

timeObject.changeTimeByMinutes(15);
console.log('Pas shtimit të 15 minutave:', timeObject.displayTime());

timeObject.changeTimeByHours(3);
console.log('Pas shtimit të 3 orëve:', timeObject.displayTime());
