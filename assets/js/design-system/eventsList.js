import { breakpoints } from '../theme/utils/breakpoints';

const eventLists = document.querySelectorAll('.events--list');

class EventList {
    constructor (dom) {
        this.dom = dom;
        this.events = dom.querySelectorAll('.event');

        this.resize();
        this.listen();
    }

    listen () {
        window.addEventListener('resize', this.resize.bind(this));
    }

    resize () {
        this.events.forEach(function (event) {
            this.updateCategoriesAlignment(event);
        }, this);
    };

    updateCategoriesAlignment (event) {
        var schedule = event.querySelector('.event-schedule'),
            scheduleHeight = schedule.offsetHeight,
            categories = event.querySelector('.event-categories'),
            gap = 18;

        if (window.innerWidth <= breakpoints.md) {
            categories.style.marginTop = '';
        } else {
            categories.style.marginTop = `calc(${scheduleHeight}px + ${gap}px)`;
        }
    }
}

eventLists.forEach(function (eventList) {
    if (window.innerWidth >= breakpoints.md && document.body.classList.contains('full-width')) {
        new EventList(eventList);
    }
}, this);
