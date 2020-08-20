import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { CustomerProductComponent } from './customer-product/customer-product.component';
import {AuthGuardGuard} from './_auth/auth-guard.guard';

const routes: Routes = [
  { path:  '', component: SignInComponent},
  { path:  'admin', component: AdminProductComponent,canActivate:[AuthGuardGuard]},
  { path:  'customer', component: CustomerProductComponent,canActivate:[AuthGuardGuard]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
