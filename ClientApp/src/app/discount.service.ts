import { Injectable, Inject } from "@angular/core";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { LogService, LOG_SERVICE } from "./log.service";


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable()

export class DiscountService {

  constructor(@Inject(LOG_SERVICE) private logger: LogService) { }

  private discountValue: number = 10;

  public get discount(): number {
    return this.discountValue;
  }

  public set discount(newValue: number) {

    this.logger.logInfoMessage("Discount "+ this.discount + " applied");

    this.discountValue = newValue || 0;
  }

  public applyDiscount(price: number) {

    this.logger.logInfoMessage("Discount " + this.discount + " applied");

    return Math.max(price - this.discountValue,5);
  }


}
