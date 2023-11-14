import { breakpoints } from '../theme/utils/breakpoints';
import { isReducedMotionPrefered } from '../theme/utils/isReducedMotionPrefered';

class Cursor {
    constructor () {
        this.element = document.createElement('div');
        this.element.classList.add('cursor');
        document.body.appendChild(this.element);

        this.listen();
    }

    listen () {
        const a = document.querySelectorAll('.block a, .events__section .events a');
        window.addEventListener('mousemove', (e) => {
            this.element.style.left = e.clientX + 'px'
            this.element.style.top = e.clientY + 'px'
        });
        a.forEach((element) => {
            element.style.cursor = 'none';
            element.addEventListener('mouseenter', (e) => {
                this.show()
            });
            element.addEventListener('mouseleave', (e) => {
                this.hide()
            });
        });
    }
    show() {
        this.element.classList.add("visible");
    }
    hide() {
        this.element.classList.remove("visible");
    }
}

if (!isReducedMotionPrefered() && window.innerWidth >= breakpoints.md) {
    new Cursor()
}
