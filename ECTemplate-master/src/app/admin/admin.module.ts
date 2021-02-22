import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin/admin.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SellerComponent } from './seller/seller.component';
import { ProductsComponent } from './products/products.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import {FormsModule} from '@angular/forms';
import { CategorySettingsComponent } from './category-settings/category-settings.component';

@NgModule({
  declarations: [AdminComponent, SellerComponent, ProductsComponent, DashbordComponent, CategorySettingsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    BrowserModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    AdminComponent
  ]
})
export class AdminModule { }
