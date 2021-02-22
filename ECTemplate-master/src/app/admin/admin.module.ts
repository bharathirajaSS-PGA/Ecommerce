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

@NgModule({
  declarations: [AdminComponent, SellerComponent, ProductsComponent, DashbordComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    BrowserModule,
    RouterModule
  ],
  exports:[
    AdminComponent
  ]
})
export class AdminModule { }
