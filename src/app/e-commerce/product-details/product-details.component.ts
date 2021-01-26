import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CommerceService } from '../commerce.service';
import { Product } from '../product-data';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productId: number;
  product: Product;

  constructor(private route: ActivatedRoute, private commerceService: CommerceService, private titleService: Title) { }

  ngOnInit() {
    this.getProductDetails();
  }

  getProductDetails(): void {
    this.productId = +this.route.snapshot.paramMap.get('id');
    this.product = this.commerceService.getProductsById(this.productId);
    this.titleService.setTitle(this.product.name);
  }

}
