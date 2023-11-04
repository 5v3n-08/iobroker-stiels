<template>
  <atoms-base-widget
    :available="available.val.value"
    icon="mdi-washing-machine"
    title="Trockner"
  >
    <div
      class="d-flex flex-grow flex-column mb-4 justify-center align-center h-100"
    >
      <h1 :class="content.class">{{ content.text }}</h1>
      <small>{{ `${Math.round(power.val.value ?? 0)} W` }}</small>
    </div>

    <template #prepend-end> </template>
  </atoms-base-widget>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    objectId: { type: String, required: true },
  },
  setup: async (props) => {
    const { power, available } = await useShellyPlug(props.objectId);

    const content = computed(() => {
      return (power.val.value ?? 0) === 0
        ? { text: "Fertig", class: "text-green" }
        : { text: "Läuft", class: "text-red" };
    });

    return { power, available, content };
  },
});
</script>

<style scoped></style>
