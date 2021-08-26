export { SnorestopModule } from "./module";
import { Il2CppDomain, Il2CppString, Il2CppObject } from "il2cpp";

export class Snorestop {
  constructor() {
  }

  load(packageJson: any, packageIndexPath: string): void {
    new (require(packageIndexPath).default)();
  }
}
