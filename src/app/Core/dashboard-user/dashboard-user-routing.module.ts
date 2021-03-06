import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {ProfileComponent} from "./profile/profile.component";
import {PurchasesComponent} from "./purchases/purchases.component";
import {PaymentUserComponent} from "./payment-user/payment-user.component";
import {UserGuard} from "../../Auth/Guards/user.guard";

const routes: Routes = [
  {
    path: 'profile',
    component: IndexComponent,
    canActivate:[UserGuard],
    children: [{
      path: '',
      component: ProfileComponent
    }]
  },
  {
    path: 'purchasesMy',
    component: IndexComponent,
    canActivate:[UserGuard],
    children: [{
      path: '',
      component: PurchasesComponent
    }]
  },
  {
    path: 'payment',
    component: IndexComponent,
    canActivate:[UserGuard],
    children: [{
      path: '',
      component: PaymentUserComponent
    }]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardUserRoutingModule {
}
