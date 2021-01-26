import { NgModule } from '@angular/core';
// material
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule, MatTooltipDefaultOptions, MAT_TOOLTIP_DEFAULT_OPTIONS} from '@angular/material/tooltip';

// changes the default values of tooltips for the whole project
export const myCustomTooltipDefaults: MatTooltipDefaultOptions = {
  showDelay: 600,
  hideDelay: 300,
  touchendHideDelay: 1000,
};

@NgModule({
  exports: [
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatTooltipModule,
   ],
   providers: [{provide: MAT_TOOLTIP_DEFAULT_OPTIONS, useValue: myCustomTooltipDefaults}],
})
export class AngularComponentsModule { }
