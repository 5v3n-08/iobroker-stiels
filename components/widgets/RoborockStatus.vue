<template>
  <atoms-base-widget
    :available="available.val.value"
    icon="mdi-vacuum"
    title="Staubsauger"
  >
    asd
  </atoms-base-widget>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    objectId: { type: String, required: true },
  },
  setup: async (props) => {
    const { available } = useRoborock(props.objectId);

    return { available };
  },
});
</script>

<style scoped></style>
