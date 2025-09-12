class PageColor {
    constructor () {
        this.colors = ["#DCCAED", "#FBD8E0", "#FDF086", "#FEBF88", "#CFE4C9", "#D4E9ED"];
        
        this.listen();
    }

    listen () {
        this.randomColor = Math.floor(Math.random() * this.colors.length);
        this.colorVariable = this.colors[this.randomColor];

        this.setColorVariable();
    }
    setColorVariable () {
        document.documentElement.style.setProperty("--color-site", this.colorVariable);
    }
}

export default new PageColor();