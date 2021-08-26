export { SnorestopModule } from "./module";
import { Domain } from "il2cpp";

export class Snorestop {
  constructor() {
    Domain.get().getAssemblies().forEach(assembly => {
      console.log(assembly.getImage());
    });
  }

  load(packageJson: any, packageIndexPath: string): void {
    new (require(packageIndexPath).default)();
  }
}
