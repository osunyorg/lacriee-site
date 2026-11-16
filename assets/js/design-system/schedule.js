const scheduleBlocks = document.querySelectorAll('.block-class-schedule');

class Schedule {
    constructor (element) {
      this.days = element.querySelectorAll('.day');
      this.closedMessage = element.querySelector('.schedule-text--closed');
      this.openMessage = element.querySelector('.schedule-text--open');
      this.currentDate = new Date;
      this.currentHour = this.currentDate.getHours();
      this.currentDay = this.currentDate.getDay();
      this.currentUTCHour = this.currentDate.getUTCHours();
      this.currentTimezoneOffset = this.currentDate.getTimezoneOffset();
      this.currentHour = this.currentHour - (this.currentTimezoneOffset / 60); // on prend l'heure locale, moins l'heure timezonée (donc négative quand c'est +1)
      this.currentMinutes = this.currentHour * 60 + this.currentDate.getMinutes(); // tout en minute pour prendre en compte les ouvertures/fermetures spéciales (ex: 11:30)

      this.listen();
    }

    listen() {
      this.days.forEach(function (day, index) {
        var dayIndex = index + 1;

        if (this.currentDay == dayIndex) {
          var openingClass = day.querySelector('.opening-hour'),
              closingClass = day.querySelector('.closing-hour');

          if (openingClass || closingClass) {
            var openingHour = openingClass.innerHTML,
                closingHour = closingClass.innerHTML,
                openingTimeAsMinutes = this.getMinutes(openingHour),
                closingTimeAsMinutes = this.getMinutes(closingHour);

            if (this.currentMinutes > openingTimeAsMinutes && this.currentMinutes < closingTimeAsMinutes) {
              this.closedMessage.classList.remove('show');
              this.openMessage.classList.add('show');
            }
          }
        }
      }.bind(this));
    }

    getMinutes(text) {
      var splittedText = text.split(':'),
          splittedHour = parseInt(splittedText[0], 10),
          splittedMinutes = parseInt(splittedText[1], 10),
          scheduleAsMinutes = splittedHour * 60 + splittedMinutes;

      return scheduleAsMinutes;
    }
}

scheduleBlocks.forEach(function (scheduleBlock) {
    new Schedule(scheduleBlock);
}, this);
