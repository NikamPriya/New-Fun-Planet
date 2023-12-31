import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { WeddingPackagesComponent } from './pages/wedding-packages/wedding-packages.component';
import { ResortServicesComponent } from './pages/resort-services/resort-services.component';
import { WeddingServicesComponent } from './pages/wedding-services/wedding-services.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { UsersComponent } from './pages/users/users.component';
import { FoodTypeComponent } from './pages/food-type/food-type.component';
import { FoodItemListComponent } from './pages/food-item-list/food-item-list.component';

import { VisitsComponent } from './pages/visits/visits.component';

import { OffersComponent } from './pages/offers/offers.component';
import { BookingComponent } from './pages/booking/booking.component';
import { OrderComponent } from './pages/order/order.component';
import { LoaderComponent } from './pages/loader/loader.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    WeddingPackagesComponent,
    ResortServicesComponent,
    WeddingServicesComponent,
    HomeComponent,
    UsersComponent,
    FoodTypeComponent,
    FoodItemListComponent,
    OffersComponent,
    BookingComponent,
    OrderComponent,
    FoodTypeComponent,
    FoodItemListComponent,
    LoaderComponent,
    VisitsComponent
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
