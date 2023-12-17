import WidgetSonosSpeaker from "@/components/widgets/SonosSpeaker.vue";
import WidgetLightBulb from "@/components/widgets/LightBulb.vue";
import WidgetShellyPlug from "@/components/widgets/ShellyPlug.vue";
import WidgetCatToilet from "@/components/widgets/CatToilet.vue";
import WidgetsRoborockStatus from "@/components/widgets/RoborockStatus.vue";
import WidgetMieleDevice from "@/components/widgets/MieleDevice.vue";

export class LayoutConfig {
  public static layouts = {
    overview: [
      {
        x: 15,
        y: 0,
        w: 8,
        h: 5,
        i: 1,
        component: WidgetShellyPlug,
        objectId: "shelly.0.SHPLG-S#6EEA66#1",
      },
      {
        x: 15,
        y: 5,
        w: 8,
        h: 5,
        i: 2,
        component: WidgetCatToilet,
      },
      // {
      //   x: 0,
      //   y: 5,
      //   w: 8,
      //   h: 5,
      //   i: 3,
      //   component: WidgetsRoborockStatus,
      //   objectId: "roborock.0.Devices.4PkiYxcqQZHQEddgh0CoF4",
      // },
      {
        x: 0,
        y: 0,
        w: 15,
        h: 5,
        i: 4,
        component: WidgetMieleDevice,
        objectId: "mielecloudservice.0.000178411803",
      },
      {
        x: 0,
        y: 5,
        w: 15,
        h: 5,
        i: 5,
        component: WidgetMieleDevice,
        objectId: "mielecloudservice.0.000106208865",
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
