import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home-module/home.module';
import { LoginModule } from './login-module/login.module';
import { RegistrationModule } from './registration-module/registration.module';
import { DashboardModuleModule } from './dashboard-module/dashboard-module.module';
import { DashboardDetailsModule } from './dashboard-details-module/dashboard-details.module';
import { SharedModuleModule } from "./shared-module/shared-module.module";
import { FormsModule } from '@angular/forms';
import { ModalModuleModule } from './modal-module/modal-module.module'; 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
    RegistrationModule,
    DashboardModuleModule,
    DashboardDetailsModule,
    SharedModuleModule,
    ModalModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
