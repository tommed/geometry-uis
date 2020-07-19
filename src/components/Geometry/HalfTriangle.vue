<template>
    <v-group>
        <v-rect :config="bgConfig"/>
        <v-shape :config="config"/>
    </v-group>
</template>

<script>
export default {
    props: ['col', 'row', 'color', 'color2'],
    inject: ['square'],
    computed: {
        config() {
            const self = this;
            return {
                x: this.col * this.square,
                y: this.row * this.square,
                fill: this.$theme.colors[self.color],
                sceneFunc (context, shape) {
                    context.beginPath();
                    context.moveTo(self.square, 0);
                    context.lineTo(0, 0);
                    context.lineTo(0, self.square);
                    context.closePath();
                    context.fillStrokeShape(shape);
                }
            }
        },
        bgConfig() {
            return {
                x: this.col * this.square,
                y: this.row * this.square,
                width: this.square,
                height: this.square,
                fill: this.$theme.colors[this.color2],
            };
        },
    }
}
</script>