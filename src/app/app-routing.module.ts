import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { NoPageComponent } from './no-page/no-page.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "seller-auth", component: SellerAuthComponent },
  { path: 'seller-home', component: SellerHomeComponent, canActivate: [AuthGuard] },
  { path: "**", component: NoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
