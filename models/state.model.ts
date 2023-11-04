import { Model } from "pinia-orm";
import { Attr, Str } from "pinia-orm/dist/decorators";

export class State<T = any> extends Model {
  static entity = "state";

  declare id: string | null;
  declare val: T;
  declare ts: number;

  static fields() {
    return {
      id: this.attr(null),
      val: this.attr(""),
      ts: this.number(-1),
    };
  }
}
