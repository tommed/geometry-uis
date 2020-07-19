<template>
    <v-group>
        <v-rect :config="rectConfig"/>
        <CircleWithStroke :col="col" :row="row" :color="color" :inner-color="innerColor"/>
    </v-group>
</template>

<script>
export default {
    props: ['row', 'col', 'color', 'innerColor'],
    inject: ['square'],
    computed: {
        rectConfig() {
            return {
                fill: this.$theme.colors[this.color],
                width: Math.round(this.square / 2.0),
                height: this.square,
                x: (this.col * this.square) + Math.round(this.square / 2.0),
                y: this.row * this.square,
            };
        },
    },
}
</script>