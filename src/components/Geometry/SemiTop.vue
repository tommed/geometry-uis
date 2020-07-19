<template>
    <v-group>
        <SemiBase :row="row" :col="col" :color="color" :x="x" :y="y" :angle="180" :rotation-deg="0"/>
    </v-group>
</template>

<script>
export default {
    props: ['row', 'col', 'color'],
    inject: ['square'],
    computed: {
        y() { return (this.row * this.square) },
        x() { return (this.col * this.square) + Math.round(this.square / 2.0) },
    }
}
</script>