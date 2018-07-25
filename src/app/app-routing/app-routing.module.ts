import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { ManageInventoryComponent } from '../components/manage-inventory/manage-inventory.component';
import { ShopProductsComponent } from '../components/shop-products/shop-products.component';

const appRoutes = [
  { path: 'home' , component: HomeComponent },
  { path:'manage-inventory', component: ManageInventoryComponent },
  { path:'shop-products', component: ShopProductsComponent },  
  { path:'', redirectTo:'/home', pathMatch: 'full'},
	{ path:'**', redirectTo:'/home', pathMatch: 'full'}

]
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
