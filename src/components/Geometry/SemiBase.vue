<template>
    <v-group>
        <v-arc :config="semiCircle"/>
    </v-group>
</template>

<script>
export default {
    props: ['row', 'col', 'color', 'angle', 'rotationDeg', 'x', 'y'],
    inject: ['square'],
    computed: {
        semiCircle() {
            const fill = this.$theme.colors[this.color || 0];
            return {
                x: this.x,
                y: this.y,
                innerRadius: 0,
                outerRadius: Math.round(this.square / 2.0),
                fill,
                strokeWidth: 0,
                angle: this.angle,
                rotationDeg: this.rotationDeg,
            };
        },
    },
}
</script>