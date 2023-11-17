import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeddingPackagesComponent } from './pages/wedding-packages/wedding-packages.component';
import { WeddingServicesComponent } from './pages/wedding-services/wedding-services.component';
import { ResortServicesComponent } from './pages/resort-services/resort-services.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
<<<<<<< HEAD
import { BookingComponent } from './pages/booking/booking.component';
import { OrderComponent } from './pages/order/order.component';
=======
<<<<<<< HEAD
import { UsersComponent } from './pages/users/users.component';
=======
<<<<<<< HEAD
import { BookingComponent } from './pages/booking/booking.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [
  {
    path: 'login',
=======
>>>>>>> 4e5d78cfd8f8aef3b275c474e21e2643a8bca902
>>>>>>> bb17f1b46001a24f8d7aa600750e52b7b85a6f6b
import { FoodTypeComponent } from './pages/food-type/food-type.component';
import { FoodItemListComponent } from './pages/food-item-list/food-item-list.component';


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
<<<<<<< HEAD

        path:'home',
        component:HomeComponent,
=======
        path: 'home',
        component: HomeComponent,
>>>>>>> 4e5d78cfd8f8aef3b275c474e21e2643a8bca902
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




    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
