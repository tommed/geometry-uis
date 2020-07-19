
// define our theme
class ColourTheme {
    constructor() {
        this.colors = [
            '#ff3600',
            '#ffc200',
            '#008592',
            '#0f154d',
            '#ff75a1',
            '#ffffff',
        ];
    }
}

export default (Vue) => {
    Vue.prototype.$theme = new ColourTheme();
};