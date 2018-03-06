import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './Features/dashboard/dashboard.component';
import { DropDownComponent } from './Features/drop-down/drop-down.component';
import { PromoBoxComponent } from './Features/promo-box/promo-box.component';
import { ProductGridComponent } from './Features/product-grid/product-grid.component';
import { ProductComponent } from './Features/product/product.component';
import { MapComponent } from './features/map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DropDownComponent,
    PromoBoxComponent,
    ProductGridComponent,
    ProductComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      libraries: ['places'],
      apiKey: 'AIzaSyDzasr3gMaBMSSb_SG_Xt05NJ8fU7nMrY0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
