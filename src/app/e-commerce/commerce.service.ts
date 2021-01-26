import { PRODUCTS } from './product-data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommerceService {

constructor() { }

getProducts(): any {
  return PRODUCTS;
}

getProductsById(productId: number): any {
  return PRODUCTS.find(product => product.id === productId);
}

}
