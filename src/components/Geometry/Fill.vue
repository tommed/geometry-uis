<template>
    <v-group>
        <v-rect :config="config"/>
    </v-group>
</template>

<script>
export default {
    props: ['row', 'col', 'color'],
    inject: ['square'],
    computed: {
        config() {
            return {
                fill: this.$theme.colors[this.color || 0],
                width: this.square,
                height: this.square,
                x: this.col * this.square,
                y: this.row * this.square,
            };
        },
    },
}
</script>