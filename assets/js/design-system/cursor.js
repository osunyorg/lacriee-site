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
        const containers = document.querySelectorAll('.block, .events__section .events, .hero figure');

        window.addEventListener('mousemove', (e) => {
            this.element.style.left = e.clientX + 'px'
            this.element.style.top = e.clientY + 'px'
        });

        containers.forEach((container) => {
            const links = container.querySelectorAll('a');
            if (links) {
                links.forEach((element) => {
                    element.style.cursor = 'none';
                    element.addEventListener('mouseenter', (e) => {
                        if (container.classList.contains('block-gallery') || container.classList.contains('block-image') || container.nodeName === "FIGURE") {
                            this.element.classList.add('extend');
                        }
                        else if (this.element.classList.contains('extend')) {
                            this.element.classList.remove('extend');
                        }
                        this.show()
                    });
                    element.addEventListener('mouseleave', (e) => {
                        this.hide()
                    });
                })
                
            }
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
