<template>
  <Suspense class="layout">
    <GridLayout
      :layout="layout"
      :responsive="responsive"
      :col-num="36"
      :row-height="25"
    >
      <GridItem
        v-for="(item, index) in layout"
        :key="index"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
      >
        <component
          class="h-100"
          :is="item.component"
          :object-id="item.objectId"
        ></component>
      </GridItem>
    </GridLayout>
  </Suspense>
</template>

<script lang="ts">
import { GridLayout, GridItem } from "vue3-grid-layout-next";
import { ref } from "vue";

export default defineComponent({
  props: {
    layout: { required: true },
  },
  components: { GridLayout, GridItem },
  setup: (): Object => {
    const responsive = ref(false);

    return { responsive };
  },
});
</script>
