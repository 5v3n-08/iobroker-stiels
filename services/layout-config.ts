import WidgetSonosSpeaker from "@/components/widgets/SonosSpeaker.vue";
import WidgetLightBulb from "@/components/widgets/LightBulb.vue";
import WidgetShellyPlug from "@/components/widgets/ShellyPlug.vue";
import WidgetCatToilet from "@/components/widgets/CatToilet.vue";

export class LayoutConfig {
  public static layouts = {
    overview: [
      {
        x: 0,
        y: 0,
        w: 10,
        h: 5,
        i: 1,
        component: WidgetShellyPlug,
        objectId: "shelly.0.SHPLG-S#6EEA66#1",
      },
      {
        x: 10,
        y: 5,
        w: 10,
        h: 5,
        i: 2,
        component: WidgetCatToilet,
      },
      // {
      //   x: 0,
      //   y: 5,
      //   w: 10,
      //   h: 5,
      //   i: 2,
      //   component: WidgetLightBulb,
      //   objectId: "hue.0.Flur_Decke_2",
      // },
    ],
  };
}
