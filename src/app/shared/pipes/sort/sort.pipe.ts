import { Product } from 'src/app/core/services/products/models/product.models';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(products: Product[] | null, price: string): Product[] {
    if(!products){return []; }
    if(!price){return products; }

    return products.sort((a, b) => {
      if (price === 'asc') {
        return a.price - b.price;
      } else if (price === 'desc') {
        return b.price - a.price;
      } else { return 0; }      
    }); 

  }

}
