class PageColor {
    constructor () {
        this.colors = ["#DCCAED", "#FBD8E0", "#FDF086", "#FC4229", "#FC4229", "#FEBF88", "#CFE4C9"];
        
        this.listen();
    }

    listen () {
        this.randomColor = Math.floor(Math.random() * this.colors.length);
        this.colorVariable = this.colors[this.randomColor];

        this.setColorVariable();
    }
    setColorVariable () {
        document.documentElement.style.setProperty("--color-accent", this.colorVariable);
        console.log(this.colorVariable)
    }
}

export default new PageColor();