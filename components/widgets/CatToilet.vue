<template>
  <atoms-base-widget :available="available" icon="mdi-cat" title="Katzenklos">
    <!-- <v-row>
      <v-col class="d-flex justify-center align-center flex-column">
        <div>
          <h2>{{ toilet1.val.value }}</h2>
        </div>
        <div class="mt-2">1. Katzenklo</div>
      </v-col>
      <v-col class="d-flex justify-center align-center flex-column">
        <div>
          <h2>{{ toilet2.val.value }}</h2>
        </div>
        <div class="mt-2">2. Katzenklo</div>
      </v-col>
    </v-row> -->
    <div class="d-flex justify-center align-center w-100">
      <h2>{{ toilet1.val.value }}</h2>
      <h2 class="mx-5">-</h2>
      <h2>{{ toilet2.val.value }}</h2>
    </div>
    <v-btn class="mt-4" variant="tonal">
      <v-icon>mdi-vacuum</v-icon>
    </v-btn>
    <template #prepend-end>
      <v-btn size="small" variant="tonal">
        <v-icon>mdi-vacuum</v-icon>
      </v-btn>
    </template>
  </atoms-base-widget>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    objectId: { type: String, required: true },
  },
  setup: async (props) => {
    const { toilet1, toilet2, available } = await useCatToilet();

    return { toilet1, toilet2, available };
  },
});
</script>

<style scoped></style>
