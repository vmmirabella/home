import { CommerceService } from './../commerce.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product-data';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private commerceService: CommerceService ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = this.commerceService.getProducts();
  }

}
