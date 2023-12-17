<template>
  <v-card variant="tonal" rounded class="base-widget">
    <div class="d-flex flex-column justify-center h-100">
      <!-- <v-card-text class="h-100"> -->
      <v-row dense class="mt-0 pa-1 h-100">
        <v-col cols="auto" class="h-100 mr-2 bg-grey-600">
          <div
            class="d-flex h-100 flex-column justify-center align-center"
            :style="{ width: '50px' }"
          >
            <v-icon size="x-large" v-if="icon">{{ icon }}</v-icon>
            <slot name="prepend" />

            <v-spacer></v-spacer>
            <slot name="prepend-end" />
          </div>
        </v-col>
        <!-- <v-col class="mr-2 d-flex flex-column"> -->
        <b
          v-if="title"
          class="base-widget-title"
          :style="{ 'min-height': '34px' }"
        >
          {{ title }}
        </b>
        <!-- </v-col> -->
      </v-row>
    </div>
    <div class="base-widget-content">
      <slot />
    </div>
    <!-- </v-card-text> -->
    <div
      v-if="available !== undefined"
      class="base-widget-connection"
      :class="available ? 'green' : 'red'"
    />
  </v-card>
</template>

<script lang="ts">
export default defineComponent({
  props: {
    available: { type: Boolean, default: undefined },
    icon: { type: String, default: undefined },
    title: { type: String, default: undefined },
  },
  setup: async (props) => {},
});
</script>
<style>
.base-widget {
  .v-card-item__content {
    height: 100%;
  }
}
</style>
<style scoped>
.base-widget-title {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 12px;
}
.base-widget-content {
  position: absolute;
  top: 0;
  padding-top: 34px;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.base-widget-connection {
  position: absolute;
  right: 5px;
  bottom: 5px;
  border-radius: 5px;
  width: 5px;
  height: 5px;

  &.green {
    background-color: green;
  }
  &.red {
    background-color: red;
  }
}
</style>
