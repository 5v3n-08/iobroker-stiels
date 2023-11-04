<template>
  <!-- <v-card variant="tonal">
    <v-card-text> -->
  <!-- <v-btn variant="tonal" v-touch:tap="toggle" @click="toggle">
    <v-icon>{{ lightBulbIcon }}</v-icon>
  </v-btn> -->
  <span>nabc</span>
  <!-- </v-card-text>
  </v-card> -->
</template>

<script lang="ts">
import { computed } from "vue";
import { useLightBulb } from "@/composables/useLightBulb";

export default {
  props: {
    objectId: { type: String, required: true },
  },
  setup: async (props) => {
    const temp = await useLightBulb(props.objectId);
    // const lightBulbIcon = computed(() => {
    //   if (!reachable.model.value?.val) {
    //     return "mdi-lightbulb-alert";
    //   }
    //   if (on.model.value?.val) {
    //     return "mdi-lightbulb-on";
    //   }
    //   return "mdi-lightbulb-off";
    // });
    return { temp };
  },
};
</script>

<style scoped></style>
