<template>
    <v-group>
        <v-circle :config="circleConfig"/>
    </v-group>
</template>

<script>
export default {
    props: ['row', 'col', 'color'],
    inject: ['square'],
    computed: {
        circleConfig() {
            return {
                fill: this.$theme.colors[this.color],
                width: this.square,
                height: this.square,
                x: (this.col * this.square) + Math.round(this.square / 2.0),
                y: (this.row * this.square) + Math.round(this.square / 2.0),
            };
        },
    }
}
</script>