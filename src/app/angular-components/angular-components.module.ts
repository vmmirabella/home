import { NgModule } from '@angular/core';
// material
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  exports: [
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatFormFieldModule,
   ],
})
export class AngularComponentsModule { }
