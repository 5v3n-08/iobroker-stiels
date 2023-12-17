<template>
  <atoms-base-widget :available="available" icon="mdi-cat" title="Katzenklos">
    <div class="d-flex justify-center align-center w-100">
      <h2>{{ toilet1.val.value }}</h2>
      <h2 class="mx-5">-</h2>
      <h2>{{ toilet2.val.value }}</h2>
    </div>
    <v-btn class="mt-4" variant="tonal">
      <v-icon>mdi-vacuum</v-icon>
    </v-btn>
  </atoms-base-widget>
</template>

<script lang="ts">
export default defineComponent({
  setup: async (props) => {
    const { toilet1, toilet2, available } = await useCatToilet();

    return { toilet1, toilet2, available };
  },
});
</script>

<style scoped></style>
