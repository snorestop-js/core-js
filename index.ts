export { SnorestopModule } from "./module";
import { Il2CppClass, Il2CppDomain } from "il2cpp";
import { Il2CppObject } from "il2cpp/src/object";

export class Snorestop {
  constructor() {
    setTimeout(() => {

      console.log(Il2CppDomain.get().findClassByName("", "PlayerControl")?.getField("LocalPlayer")?.getValue<Il2CppObject>()?.getClass());
    }, 17500)
  }

  load(packageJson: any, packageIndexPath: string): void {
    new (require(packageIndexPath).default)();
  }
}
