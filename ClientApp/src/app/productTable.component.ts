import { Component, Input, ViewChildren, QueryList } from "@angular/core";
import { Model } from "./repository.model";
import { Product } from "./product.model";
import { PaCellColor } from "./cellColor.directive";
import { Data } from "@angular/router";
import { DiscountService } from "./discount.service";

@Component({
  selector: "paProductTable",
  templateUrl: "productTable.component.html"
})
export class ProductTableComponent {


  constructor(private dataModel:Model) { }

  getProduct(key: number): Product {
    return this.dataModel.getProduct(key);
  }


  getProducts(): Product[] {
    return this.dataModel.getProducts();
  }

  deleteProduct(key:number) {
    this.dataModel.deleteProduct(key);
  }




}
