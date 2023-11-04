import { useIoState } from "./useIoState";

export const useCatToilet = async () => {
  const toilet1 = useIoState<number>(
    `javascript.0.variables.counter_cat_toilet_1`
  );
  const toilet2 = useIoState<number>(
    `javascript.0.variables.counter_cat_toilet_2`
  );
  const toilet1_available = useIoState<boolean>(
    "zigbee.0.00158d000316dfcc.available"
  );
  const toilet2_available = useIoState<boolean>(
    "zigbee.0.00158d0002fd50d5.available"
  );

  toilet1.subscribe();
  toilet2.subscribe();
  toilet1_available.subscribe();
  toilet2_available.subscribe();

  const available = computed(
    () => toilet1_available.val.value && toilet2_available.val.value
  );

  return { toilet1, toilet2, available };
};
