<template>
  <v-layout theme="dark">
    <v-app-bar color="grey" density="compact">
      <v-app-bar-title>
        <v-tabs bg-color="grey">
          <v-tab :to="'/'">Home</v-tab>
        </v-tabs>
      </v-app-bar-title>

      <template v-slot:append>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
  </v-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";

export default defineComponent({
  component: { RouterLink, RouterView },
  setup: () => {
    const $router = useRouter();

    // return {$rou}
  },
});
</script>
