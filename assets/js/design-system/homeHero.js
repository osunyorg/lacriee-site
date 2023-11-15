const heroHome = document.querySelector('.page__home header.hero');

class HomeHero {
    constructor (dom) {
        this.dom = dom;
        this.title = this.dom.querySelector('h1');
        this.titleText = this.title.innerHTML;
        this.listen();
    }

    listen () {
        if (this.titleText.includes('*')) {
            this.title.innerHTML = this.titleText.replace('*', '<span class="asterisk"></span>');
        }
    }
}

if (heroHome) {
    new HomeHero(heroHome);
}