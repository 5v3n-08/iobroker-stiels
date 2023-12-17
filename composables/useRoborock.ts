import { useIoState } from "./useIoState";

export const useRoborock = (id: string) => {
  // const power = useIoState<number>(`${id}.Relay0.Power`);
  const available = useIoState<boolean>(`${id}.deviceInfo.online`);
  available.subscribe();

  // power.subscribe();

  return { available };
};
