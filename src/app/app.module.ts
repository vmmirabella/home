
import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// added..
import { AngularComponentsModule } from './angular-components/angular-components.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MainToolbarComponent } from './e-commerce/main-toolbar/main-toolbar.component';
import { ProductDetailsComponent } from './e-commerce/product-details/product-details.component';
import { ProductsComponent } from './e-commerce/products/products.component';



@NgModule({
   declarations: [
      AppComponent,
      SplashPageComponent,
      SidenavComponent,
      ProductsComponent,
      MainToolbarComponent,
      ProductDetailsComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      AngularComponentsModule,
   ],
   providers: [ Title],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
