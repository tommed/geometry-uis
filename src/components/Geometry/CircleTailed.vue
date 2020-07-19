<template>
    <v-group>
        <PlainCircle :row="row" :col="col" :color="color"/>
        <v-rect ref="animTarget" :config="squareConfig"/>
    </v-group>
</template>

<script>
export default {
    props: ['row', 'col', 'color', 'tail'],
    inject: ['square'],
    computed: {
        squareConfig() {
            const hs = Math.round(this.square / 2.0);
            const colIndex = this.tail.indexOf('left') !== -1 ? 0 : 0.5;
            const rowIndex = this.tail.indexOf('top')  !== -1 ? 0 : 0.5;
            return {
                fill: this.$theme.colors[this.color],
                width: hs,
                height: hs,
                x: (this.col + colIndex) * this.square,
                y: (this.row + rowIndex) * this.square,
            };
        },
    },
}
</script>