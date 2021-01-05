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

}
