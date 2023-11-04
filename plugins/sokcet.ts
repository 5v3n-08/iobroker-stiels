import { IoBrokerWS } from "~/services/socket.service";

declare module "#app" {
  interface NuxtApp {
    $socket: IoBrokerWS;
  }
}
declare module "vue" {
  interface ComponentCustomProperties {
    $socket: IoBrokerWS;
  }
}

export default defineNuxtPlugin(({ $pinia }) => {
  const socket = new IoBrokerWS();
  socket.initialize();
  return { provide: { socket } };
});
