<template>
    <v-layer ref="layer">
        <component v-for="i in matrix" :key="`${i.config.row}x${i.config.col}`"
            :is="i.component" 
            v-bind="i.config"
            v-bind:animations="(i.config.animationGroups||[]).map(g => animations[g])"
            />
    </v-layer>
</template>

<script>
import AnimationBuilder from '../../plugins/animations'

export default {
    props: ['config'],
    data() {
        return {
            animations: {},
        };
    },
    mounted() {
        const layer = this.$refs.layer._konvaNode;
        const res = {};
        this.config.animations.forEach((animConfig) => { 
            const animation = AnimationBuilder(layer, animConfig);
            res[animConfig.group] = animation;
        });
        this.animations = res;
    },
    computed: {
        matrix() {
            // create a flat-matrix for all our elements
            const res = [];
            for (let rowi = 0; rowi < this.config.matrix.length; rowi++) {
                const row = this.config.matrix[rowi];
                for (let coli = 0; coli < row.length; coli ++) {
                    const col = row[coli];
                    res.push({
                        component: () => import(`./${col.type}.vue`),
                        config: { ...col, col: coli, row: rowi },
                    });
                }
            }
            return res;
        }
    },
}
</script>