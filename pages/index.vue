<template>
  <AtomsBaseGridLayout :layout="layout"></AtomsBaseGridLayout>
</template>

<script lang="ts">
import AtomsBaseGridLayout from "@/components/atoms/base-grid-layout.vue";
import { LayoutConfig } from "@/services/layout-config";

export default {
  components: { AtomsBaseGridLayout },
  setup: () => {
    const layout = LayoutConfig.layouts.overview;

    return { layout };
  },
};
</script>
