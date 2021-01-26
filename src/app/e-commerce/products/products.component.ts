import { CommerceService } from './../commerce.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product-data';
import { Title } from '@angular/platform-browser';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[];

  constructor(private commerceService: CommerceService, private titleService: Title ) { }

  ngOnInit() {
    this.getProducts();
    this.setTitle('Doe\'s Furniture: Products');
  }

  getProducts() {
    this.products = this.commerceService.getProducts();
  }

  setTitle(newTitle: string){
    this.titleService.setTitle(newTitle);
  }

  convertWhiteSpace(url: string) {
    return url.replace(/\s/g, '-');
  }

}
