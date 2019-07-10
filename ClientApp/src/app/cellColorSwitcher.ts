import { Directive, HostBinding, Input, SimpleChange, ContentChild } from "@angular/core";
import { PaCellColor } from "./cellColor.directive";

@Directive({
  selector: "table"
})

export class PaCellColorSwitcher {

  @Input("paCellDarkColor")
  modelProperty: boolean;

  @ContentChild(PaCellColor)
  contentChild: PaCellColor;


  ngOnChanges(changes: {[property:string]: SimpleChange}) {
    if (this.contentChild != null) {
      console.log("query ok");
      this.contentChild.setColor(changes["modelProperty"].currentValue);
    }
  }

}
