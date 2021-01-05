import { ProductsComponent } from './e-commerce/products/products.component';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full', component: SplashPageComponent},

    {path: 'e-commerce', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
