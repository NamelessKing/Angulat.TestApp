import { Pipe, PipeTransform } from '@angular/core';
import { DiscountService } from './discount.service';



@Pipe({ name: 'discount',pure:false})


export class PaDiscountPipe implements PipeTransform {


  constructor(private disc: DiscountService) { }




  transform(price: number): number {

    //let transformedValue = Number.parseFloat(value); // implement your transformation logic here
    //let rateNumber = args == undefined ? this.defaultRate : Number.parseInt(args);

    //return transformedValue + (transformedValue * (rateNumber / 100));
    return this.disc.applyDiscount(price);


  }
}
