<template>
    <section class="matrix-container">
        <v-stage :config="config">
            <slot></slot>
        </v-stage>
    </section>
</template>

<script>
export default {
    props: ['rows', 'columns', 'squareSize'],
    computed: {
        config() {
            return {
                width: this.columns * this.squareSize,
                height: this.rows * this.squareSize,
            };
        },
    },
    provide: function() {
        return {
            square: this.squareSize,
        }
    },
}
</script>