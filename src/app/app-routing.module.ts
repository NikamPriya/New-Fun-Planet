import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeddingPackagesComponent } from './pages/wedding-packages/wedding-packages.component';
import { WeddingServicesComponent } from './pages/wedding-services/wedding-services.component';
import { ResortServicesComponent } from './pages/resort-services/resort-services.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
<<<<<<< HEAD

import { UsersComponent } from './pages/users/users.component';

import { FoodTypeComponent } from './pages/food-type/food-type.component';
import { FoodItemListComponent } from './pages/food-item-list/food-item-list.component';
import { OffersComponent } from './pages/offers/offers.component';
=======
import { BookingComponent } from './pages/booking/booking.component';
import { OrderComponent } from './pages/order/order.component';
import { UsersComponent } from './pages/users/users.component';
import { FoodTypeComponent } from './pages/food-type/food-type.component';
import { FoodItemListComponent } from './pages/food-item-list/food-item-list.component';
import { VisitsComponent } from './pages/visits/visits.component';

>>>>>>> 3f600853e7fb7f91a85549d63650447b12648233

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
        path: 'home',
        component: HomeComponent,
      },

      {
        path: 'weddingPackages',
        component: WeddingPackagesComponent,
      },
      {
<<<<<<< HEAD
        path : "weddingServices",
        component : WeddingServicesComponent
      },
      {
        path:"resortServices",
        component:ResortServicesComponent
=======
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
>>>>>>> 3f600853e7fb7f91a85549d63650447b12648233
      },
      {
        path:"Users",
        component:UsersComponent
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
<<<<<<< HEAD
        path:'Offers',
        component:OffersComponent
      },

=======
        path:'Visit',
        component:VisitsComponent
      }
>>>>>>> 3f600853e7fb7f91a85549d63650447b12648233




    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
