import { Component, OnInit } from "@angular/core";
import { InventoryService } from "../../services/inventory.service";

@Component({
  selector: "app-new-product",
  templateUrl: "./new-product.component.html",
  styleUrls: ["./new-product.component.css"]
})
export class NewProductComponent implements OnInit {
  constructor(private InventoryService: InventoryService) {}

  ngOnInit() {}
  submitForm(addProductForm) {
    console.log("Form Value", addProductForm.value);
    this.InventoryService.addNewInventoryProduct(
      addProductForm.value
    ).subscribe(userForm => alert("A new user Created"));
    // alert("Recipe Successfully Added.");
    // addProductForm.reset();
  }
}
