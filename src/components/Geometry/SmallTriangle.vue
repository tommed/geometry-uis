<template>
    <v-group>
        <v-rect :config="bg"/>
        <v-regular-polygon :config="config"/>
    </v-group>
</template>

<script>
export default {
    props: ['row', 'col', 'color', 'bgColor'],
    inject: ['square'],
    computed: {
        config() {
            return {
                fill: this.$theme.colors[this.color],
                sides: 3,
                radius: this.square / 2,
                rotation: 0,
                x: (this.col + 0.5) * (this.square),
                y: (this.row + 0.75) * this.square,
            };
        },
        bg() {
            return {
                fill: this.$theme.colors[this.bgColor],
                width: this.square,
                height: this.square,
                x: this.col * this.square,
                y: this.row * this.square,
            }
        }
    }
}
</script>