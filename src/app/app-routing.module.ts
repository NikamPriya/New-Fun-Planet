import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeddingPackagesComponent } from './pages/wedding-packages/wedding-packages.component';
import { WeddingServicesComponent } from './pages/wedding-services/wedding-services.component';
import { ResortServicesComponent } from './pages/resort-services/resort-services.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { BookingComponent } from './pages/booking/booking.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [
  {
    path: 'login',
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
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
