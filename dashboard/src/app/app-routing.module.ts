import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login-module/login/login.component';
import {HomeComponent} from './home-module/home/home.component';
import {RegistrationComponent} from './registration-module/registration/registration.component';
import {DashboardComponent} from './dashboard-module/dashboard/dashboard.component';
import {NoPageFoundComponent} from './shared-module/no-page-found/no-page-found.component';
import {DashboardDetailsComponent} from './dashboard-details-module/dashboard-details/dashboard-details.component';
import { ModalComponent } from './modal-module/modal/modal.component';

const routes: Routes = [
  {path:"", redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'dashboarddetails/:id', component:DashboardDetailsComponent},
  {path:'redirectToLogin', component:ModalComponent},
  {path:'**', component:NoPageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
