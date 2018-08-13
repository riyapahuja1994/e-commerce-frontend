import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ManageInventoryComponent } from './components/manage-inventory/manage-inventory.component';
import { ShopProductsComponent } from './components/shop-products/shop-products.component';
import { NavigationHeaderComponent } from './components/navigation-header/navigation-header.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { InventoryProductListComponent } from './components/inventory-product-list/inventory-product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ManageInventoryComponent,
    ShopProductsComponent,
    NavigationHeaderComponent,
    NewProductComponent,
    ProductDetailsComponent,
    EditProductComponent,
    InventoryProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
