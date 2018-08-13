import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private rootUrl: string = "https://e-commerce-backend.herokuapp.com/inventory_products";

  constructor(private HttpClient: HttpClient) { }

  getInventoryProducts(){}

  getInventoryProductById(){}

  addNewInventoryProduct(){}

  updateInventoryProduct(){}

  deleteInventoryProduct(){}
}
