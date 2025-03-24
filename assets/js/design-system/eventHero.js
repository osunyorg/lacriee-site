import { breakpoints } from '../theme/utils/breakpoints';

function resizeEventHero(hero) {
    var categories = hero.querySelector('.event-categories'),
        schedule = hero.querySelector('.event-schedule'),
        verticalSpace = 0;

    if (categories && schedule) {
        verticalSpace = (categories.offsetHeight - schedule.offsetHeight);
        verticalSpace = Math.max(0, verticalSpace);
        if (window.innerWidth >= breakpoints.lg) {
            schedule.style.marginTop = verticalSpace + "px";
        } else {
            schedule.setAttribute('style', '');
        }
    }
}

(function () {
    var hero = document.querySelector('.events__page .hero, .exhibitions__page .hero');

    if (hero) {
        resizeEventHero(hero);
        window.addEventListener('resize', function(){
            resizeEventHero(hero)
        });
    }
})();
