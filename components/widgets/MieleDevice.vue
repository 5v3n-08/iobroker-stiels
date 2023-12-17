<template>
  <atoms-base-widget
    :available="available.val.value"
    icon="mdi-washing-machine"
    :title="name.val.value"
  >
    <div
      class="d-flex flex-grow flex-column mb-4 justify-center align-center h-100"
    >
      <h1 :class="content">{{ `${status.val.value}` }}</h1>
      <small class="phase">{{ `${phase.val.value}` }}</small>
      <small>{{
        `${name.val.value} läuft noch ${time.val.value} Stunden.`
      }}</small>
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
    const { name, available, time, status, phase } = await useMieleDevice(
      props.objectId
    );

    const content = computed(() => {
      return status.val.value === "In Betrieb" ? "text-red" : "text-green";
    });

    return { name, available, time, content, status, phase };
  },
});
</script>

<style scoped>
.phase {
  font-weight: bold;
}
</style>
