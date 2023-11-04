import { createPinia } from "pinia";
import { createORM } from "pinia-orm";

export default defineNuxtPlugin(({ $pinia }) => {
  $pinia.use(createORM());
});
