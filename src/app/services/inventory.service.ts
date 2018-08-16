import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class InventoryService {
  private _rootUrl: string =
    "https://e-commerce-backend.herokuapp.com/inventory_products";

  constructor(private HttpClient: HttpClient) {}

  getInventoryProducts(): Observable<any> {
    return this.HttpClient.get(this._rootUrl);
  }

  getInventoryProductById() {}

  addNewInventoryProduct(inventoryProduct: JSON): Observable<any> {
    console.log(inventoryProduct);
    return this.HttpClient.post(this._rootUrl, inventoryProduct);
  }

  updateInventoryProduct() {}

  deleteInventoryProduct() {}
}
