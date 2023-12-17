import { useIoState } from "./useIoState";

export const useMieleDevice = (id: string) => {
  const available = useIoState<boolean>(`${id}.Connected`);
  const phase = useIoState<string>(`${id}.Programmphase`);
  const time = useIoState<string>(`${id}.remainingTime`);
  const name = useIoState<string>(`${id}.ACTIONS.Nickname`);
  const status = useIoState<string>(`${id}.Status`);

  available.subscribe();
  phase.subscribe();
  time.subscribe();
  name.subscribe();
  status.subscribe();

  return { available, phase, time, name, status };
};
