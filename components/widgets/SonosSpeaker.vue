<template>
  <!-- <v-card variant="tonal">
	  <v-card-text> -->
  <!-- <v-btn variant="tonal" v-touch:tap="toggle" @click="toggle">
	  <v-icon>{{ lightBulbIcon }}</v-icon>
	</v-btn> -->
  <span>{{ state.val.value }}</span>
  <!-- </v-card-text>
	</v-card> -->
</template>

<script lang="ts">
export default {
  props: {
    objectId: { type: String, required: true },
  },
  setup: async (props) => {
    const { state } = useSonosSpeaker(props.objectId);
    // const lightBulbIcon = computed(() => {
    //   if (!reachable.model.value?.val) {
    //     return "mdi-lightbulb-alert";
    //   }
    //   if (on.model.value?.val) {
    //     return "mdi-lightbulb-on";
    //   }
    //   return "mdi-lightbulb-off";
    // });
    return { state };
  },
};
</script>

<style scoped></style>
