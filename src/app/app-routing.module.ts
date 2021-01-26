import { ProductsComponent } from './e-commerce/products/products.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './e-commerce/product-details/product-details.component';


const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full', component: SplashPageComponent},
  {path: 'e-commerce', children: [
    {path: '', component: ProductsComponent},
    {path: ':name/:id', component: ProductDetailsComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
