import { ProductsComponent } from './e-commerce/products/products.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// added..
import { AngularComponentsModule } from './angular-components/angular-components.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SplashPageComponent } from './splash-page/splash-page.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
   declarations: [
      AppComponent,
      SplashPageComponent,
      SidenavComponent,
      ProductsComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      AngularComponentsModule,
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
