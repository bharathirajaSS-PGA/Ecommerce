import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// Modules
import { SharedModule } from './shared/shared.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CategoryModule } from './category/category.module';
import { NotifierModule } from 'angular-notifier';
// Services
import { DataService } from './services/data.service';
// Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { CarouselComponent } from './front-page/carousel/carousel.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { EmptyComponent } from './empty/empty.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FrontPageComponent,
    CarouselComponent,
    ShoppingCartComponent,
    EmptyComponent,
    NotFoundComponent,
    PaymentComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TooltipModule.forRoot(),
    CategoryModule,
    AdminModule,
    NotifierModule.withConfig({
      position: {
        horizontal: {
          position: 'right'
        },
        vertical: {
          position: 'top'
        }
      }
    })
  ],
  providers: [DataService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
