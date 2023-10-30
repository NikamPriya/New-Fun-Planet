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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    WeddingPackagesComponent,
    ResortServicesComponent,
    WeddingServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
