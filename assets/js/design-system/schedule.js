const scheduleBlocks = document.querySelectorAll('.block-class-schedule');

class Schedule {
    constructor (element) {
      this.timeZone = 'Europe/Paris';
      this.days = element.querySelectorAll('.day');
      this.closedMessage = element.querySelector('.schedule-text--closed');
      this.openMessage = element.querySelector('.schedule-text--open');
      this.currentDate = new Date;
      this.currentHour = this.currentDate.getHours();
      this.currentDay = this.currentDate.getDay();
      this.currentUTCHour = this.currentDate.getUTCHours();
      this.currentTimezoneOffset = this.currentDate.getTimezoneOffset();
      this.currentHour = this.currentHour - (this.currentTimezoneOffset / 60); // on prend l'heure locale, moins l'heure timezonée (donc négative quand c'est +1)

      this.listen();
    }

    listen() {
      this.days.forEach(function (day, index) {
        var dayIndex = index + 1;

        if (this.currentDay == dayIndex) {
          var openingHour = day.querySelector('.opening-hour').innerHTML,
              closingHour = day.querySelector('.closing-hour').innerHTML,
              trimedOpeningHour = openingHour.replace(/^\:00+|\:00+$/g, ''),
              trimedClosingHour = closingHour.replace(/^\:00+|\:00+$/g, '');

          if (this.currentHour > trimedOpeningHour && this.currentHour < trimedClosingHour) {
            this.closedMessage.classList.remove('show');
            this.openMessage.classList.add('show');
          }
        }
      }.bind(this));
    }
}

scheduleBlocks.forEach(function (scheduleBlock) {
    new Schedule(scheduleBlock);
}, this);
