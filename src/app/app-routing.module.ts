import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeddingPackagesComponent } from './pages/wedding-packages/wedding-packages.component';
import { WeddingServicesComponent } from './pages/wedding-services/wedding-services.component';
import { ResortServicesComponent } from './pages/resort-services/resort-services.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { BookingComponent } from './pages/booking/booking.component';
import { OrderComponent } from './pages/order/order.component';
import { UsersComponent } from './pages/users/users.component';
import { FoodTypeComponent } from './pages/food-type/food-type.component';
import { FoodItemListComponent } from './pages/food-item-list/food-item-list.component';
import { VisitsComponent } from './pages/visits/visits.component';
import { OffersComponent } from './pages/offers/offers.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {

        path:'home',
        component:HomeComponent,
      },

      {
        path: 'weddingPackages',
        component: WeddingPackagesComponent,
      },
      {
        path: 'weddingServices',
        component: WeddingServicesComponent,
      },
      {
        path: 'resortServices',
        component: ResortServicesComponent,
      },
      {
        path: 'booking',
        component: BookingComponent,
      },
      {
        path: 'order',
        component: OrderComponent,
      },
      {
        path:"Users",
        component:UsersComponent,
      },
      {
        path:'FoodType',
        component:FoodTypeComponent
      },
      {
        path:'FoodItemList',
        component:FoodItemListComponent
      },
      {
        path:'Visit',
        component:VisitsComponent
      },
      {
        path:'Offers',
        component:OffersComponent
      }




    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
