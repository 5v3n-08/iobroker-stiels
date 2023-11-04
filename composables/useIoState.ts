import { useRepo } from "pinia-orm";
import { State } from "~/models/state.model";

export const useIoState = <T = any>(id: string) => {
  const { getState } = useSimpleApi();
  const { $socket } = useNuxtApp();

  if (!useRepo(State<T>).find(id)) {
    useRepo(State).save({ id });
  }

  const subscribe = async () => {
    $socket.subscribe(id);
    const response = await getState(id);
    // const response = await subscribeState<T>(id);
    useRepo(State).save({ id, val: response.val, ts: response.ts });
  };

  const val = computed(() => useRepo(State<T>).find(id)?.val);

  return { subscribe, val };
};
