import { useIoState } from "./useIoState";

export const useShellyPlug = async (id: string) => {
  const power = useIoState<number>(`${id}.Relay0.Power`);
  const available = useIoState<boolean>(`${id}.online`);
  power.subscribe();
  available.subscribe();
  return { power, available };
};
