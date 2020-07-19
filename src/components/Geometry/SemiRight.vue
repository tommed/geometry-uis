<template>
    <v-group>
        <SemiBase :row="row" :col="col" :color="color" :x="x" :y="y" :angle="180" :rotation-deg="90"/>
    </v-group>
</template>

<script>
export default {
    props: ['row', 'col', 'color'],
    inject: ['square'],
    computed: {
        y() { return (this.row * this.square) + Math.round(this.square / 2.0); },
        x() { return ((this.col + 1) * this.square); },
    }
}
</script>