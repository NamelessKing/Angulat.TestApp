import { ApplicationRef, Component, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Model } from "./repository.model";
import { Product } from "./product.model";
import { DiscountService } from "./discount.service";

@Component({
  selector: "paDiscountDisplay",
  template: "<div>the discounter is {{discounter.discount}}</div>"
})

export class PaDiscountDisplayComponent {

  constructor(private discounter: DiscountService) { }

  //@Input("discounter")
  //discounter: DiscountService;
}
