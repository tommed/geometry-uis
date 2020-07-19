<template>
    <v-group>
        <PlainCircle :row="row" :col="col" :color="color"/>
        <v-circle :config="centerCircleConfig"/>
    </v-group>
</template>

<script>
export default {
    props: ['row', 'col', 'color', 'innerColor'],
    inject: ['square'],
    computed: {
        centerCircleConfig() {
            return {
                fill: this.$theme.colors[this.innerColor],
                width: this.square / 2.0,
                height: this.square / 2.0,
                x: (this.col * this.square) + Math.round(this.square / 2.0),
                y: (this.row * this.square) + Math.round(this.square / 2.0),
            };
        },
    }
}
</script>