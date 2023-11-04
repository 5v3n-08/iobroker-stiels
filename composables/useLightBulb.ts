import { useIoState } from "./useIoState";

// by convention, composable function names start with "use"
export const useLightBulb = async (id: string) => {
  const on = useIoState(`${id}.on`);
  // const { getStates } = useStates(`${id}.*`);
  // const states = await getStates();

  // useRepo(State).insert([{ id: `${id}.temp`, name: "abc" }]);

  // const on = useObjectState<boolean>(`${id}.on`, states[`${id}.on`].val);
  // const bri = useObjectState<number>(`${id}.bri`, states[`${id}.bri`].val);
  // const reachable = useObjectState<boolean>(
  //   `${id}.reachable`,
  //   states[`${id}.reachable`].val
  // );

  // const toggle = () => on.setState({ val: !on.val.value });
  // return { on, bri, reachable, toggle };
};
