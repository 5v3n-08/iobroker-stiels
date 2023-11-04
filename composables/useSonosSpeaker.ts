import { useIoState } from "./useIoState";

type SonosSpeakerState = "play" | "stop";

export const useSonosSpeaker = (id: string) => {
  const state = useIoState<SonosSpeakerState>(`${id}.state`);

  state.subscribe();

  return { state };
};
