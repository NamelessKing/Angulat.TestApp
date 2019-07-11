import { ApplicationRef, Component, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Model } from "./repository.model";
import { Product } from "./product.model";
import { DiscountService } from "./discount.service";
@Component({
  selector: "paDiscountEditor",
  template: "<div><input [(ngModel)]='discounter.discount'/></div>"
})
export class PaDiscountEditorComponent {


  constructor(private discounter:DiscountService) {}


  //@Input("discounter")
  //discounter: DiscountService;
}
