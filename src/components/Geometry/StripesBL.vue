<template>
    <v-group>
        <v-arc v-for="ring in rings" :key="ring.index" :config="ring.config" />
    </v-group>
</template>

<script>
export default {
    props: ['row', 'col', 'colors'],
    inject: ['square'],
    computed: {
        x() { return (this.col + 0) * this.square },
        y() { return (this.row + 1) * this.square },
        rings() {
            let ringCount = this.colors.length;
            let res = [];
            for (let i = 0; i < ringCount; i++) {
                res.push({
                    index: i,
                    config: this.genArc(i, ringCount - i, ringCount),
                });
            }
            return res;
        },
    },
    methods: {
        genArc(colorIndex, innerRingNum, innerRingCount) {
            const fill = this.$theme.colors[this.colors[colorIndex]];
            return {
                x: this.x,
                y: this.y,
                innerRadius: 0,
                outerRadius: Math.round(this.square / innerRingCount) * innerRingNum,
                fill,
                strokeWidth: 0,
                angle: 90,
                rotationDeg: -90,
            }
        },
    }
}
</script>