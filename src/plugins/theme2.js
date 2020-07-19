
// define our theme
class ColourTheme {
    constructor() {
        this.colors = [
            '#1d3752',
            '#214d72',
            '#2c7695',
            '#50bfc3',
            '#eeeeee',
            '#ffffff',
        ];
    }
}

export default (Vue) => {
    Vue.prototype.$theme = new ColourTheme();
};