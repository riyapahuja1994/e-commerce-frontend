import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import { HomeComponent } from '../components/home/home.component';
import { ManageInventoryComponent } from '../components/manage-inventory/manage-inventory.component';
import { ShopProductsComponent } from '../components/shop-products/shop-products.component';
import { NewProductComponent } from '../components/new-product/new-product.component';
import { ProductDetailsComponent } from '../components/product-details/product-details.component';
import { EditProductComponent } from '../components/edit-product/edit-product.component';
import { InventoryProductListComponent } from '../components/inventory-product-list/inventory-product-list.component';
import { LeaveFormGuard } from '../guards/leave-form.guard';

const appRoutes = [
  { path: 'home' , component: HomeComponent },
  { path:'manage-inventory', component: ManageInventoryComponent,
    children:[
    { path:'new', component: NewProductComponent },      
    { path:':id', component: ProductDetailsComponent },
    { path:':id/edit', component: EditProductComponent, canDeactivate: [LeaveFormGuard] },
    { path:'', component: InventoryProductListComponent }
  ]
  },
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
