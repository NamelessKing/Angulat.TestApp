import { Pipe, PipeTransform } from '@angular/core';



@Pipe({ name: 'addTax' })


export class PaAddTaxPipe implements PipeTransform {


  defaultRate: number = 10;


  transform(value: any, args?: any): number {

    let transformedValue = Number.parseFloat(value); // implement your transformation logic here
    let rateNumber = args == undefined ? this.defaultRate : Number.parseInt(args);

    return transformedValue + (transformedValue * (rateNumber/100));
  }
}
