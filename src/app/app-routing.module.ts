import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeddingPackagesComponent } from './pages/wedding-packages/wedding-packages.component';
import { WeddingServicesComponent } from './pages/wedding-services/wedding-services.component';
import { ResortServicesComponent } from './pages/resort-services/resort-services.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';

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
        path: "weddingPackages",
        component: WeddingPackagesComponent
=======
        path:'home',
        component:HomeComponent,
      },  

      {
        path: 'weddingPackages',
        component: WeddingPackagesComponent,
>>>>>>> 33bf22ae135da090baa88273dd841c0c7c82ff3f
      },
      {
        path : "weddingServices",
        component : WeddingServicesComponent
      },
      {
        path:"resortServices",
        component:ResortServicesComponent
      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
