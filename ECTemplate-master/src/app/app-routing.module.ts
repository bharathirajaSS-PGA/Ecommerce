import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrontPageComponent } from './front-page/front-page.component';
import { CategoryComponent } from './category/category.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { ProductDetailComponent } from './category/product-detail/product-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { EmptyComponent } from './empty/empty.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminComponent } from './admin/admin/admin.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { SellerComponent } from './admin/seller/seller.component';
import { ProductsComponent } from './admin/products/products.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: FrontPageComponent },
  {
    path: 'category',
    component: CategoryComponent,
    children: [
      { path: ':category', component: CategoryListComponent },
      { path: 'product/:id', component: ProductDetailComponent }
    ]
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'seller', component: SellerComponent },
      { path: 'products', component: ProductsComponent}
      
    ]
  },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'payment', component: PaymentComponent },
  { path: 'empty', component: EmptyComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
