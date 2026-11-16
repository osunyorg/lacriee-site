const scheduleBlocks = document.querySelectorAll('.block-class-schedule');

class Schedule {
    constructor (element) {
      this.days = element.querySelectorAll('.day');
      this.closedMessage = element.querySelector('.schedule-text--closed');
      this.openMessage = element.querySelector('.schedule-text--open');

      var now = new Date();
      this.currentTime = now.toTimeString().slice(0, 5); // "HH:MM" en heure locale (pas besoin de calculer un fuseau horaire supplémentaire)
      this.currentDayIndex = (now.getDay() + 6) % 7; // utiliser un modulo pour convertir en lundi = 0 ... dimanche = 6

      this.init();
    }

    init() {
      var day = this.days[this.currentDayIndex];
      if (!day) return;

      var opening = day.querySelector('.opening-hour'),
          closing = day.querySelector('.closing-hour');

      if (!opening || !closing) return;

      var openingTime = this.normalize(opening.textContent),
          closingTime = this.normalize(closing.textContent);

      if (this.currentTime >= openingTime && this.currentTime < closingTime) {
        this.closedMessage.classList.remove('show');
        this.openMessage.classList.add('show');
      }
    }

    // "11:30" reste "11:30", " 9:05 " devient "09:05"
    // cela permet la comparaison en string (plus simple)
    normalize(text) {
      var parts = text.trim().split(':');
      return ('0' + parts[0]).slice(-2) + ':' + ('0' + parts[1]).slice(-2);
    }
}

scheduleBlocks.forEach(function (scheduleBlock) {
    new Schedule(scheduleBlock);
});