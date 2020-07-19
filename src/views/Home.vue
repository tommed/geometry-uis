<template>
  <div class="main-layout home">
    <section class="main-content">
      <FakeContent/>
    </section>
    <section class="geometry">
      <Matrix :rows="13" :columns="10" :square-size="100">
          <LayerFromConfig :config="layer"/>
      </Matrix>
    </section>
  </div>
</template>

<script>
import Layout1 from '../plugins/layout1';

export default {
  computed: {
    layer() { return Layout1 },
  },
}
</script>