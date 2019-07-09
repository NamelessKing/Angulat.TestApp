import { Directive, Input, ViewContainerRef, TemplateRef, SimpleChange } from "@angular/core";


@Directive({
  selector:"[paIf]"
})
export class PaStructureDirective {

  constructor(private container:ViewContainerRef,private child: TemplateRef<Object>) {

  }


  @Input("paIf")
  expressionResult: boolean;


  ngOnChanges(changes: { [property: string]: SimpleChange }) {
    let change = changes["expressionResult"];

    if (!change.isFirstChange() && !change.currentValue) {
      this.container.clear();
      console.log(!change.isFirstChange());
      console.log(!change.currentValue);
      console.log("\n\n\n");
    } else if (change.currentValue) {
      console.log(change.currentValue);
      this.container.createEmbeddedView(this.child);
    }
  }



}
