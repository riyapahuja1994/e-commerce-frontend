import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ManageInventoryComponent } from './components/manage-inventory/manage-inventory.component';
import { ShopProductsComponent } from './components/shop-products/shop-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ManageInventoryComponent,
    ShopProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
