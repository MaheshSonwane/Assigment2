import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/product.service';
import { Products } from 'src/app/main.model';
import { DataStorageService } from 'src/app/data-storage.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {
  pordct: Products[];
  constructor(private productService: ProductService,
    private dataStorageService: DataStorageService) { }

  ngOnInit() {

  }


  onSubmit(form: NgForm) {
    const value = form.value;
    const newProducts = new Products(value.Pname, value.image, value.categories, value.price);
    this.productService.addProducts(newProducts);
    form.reset();
  }

  onSaveData() {
    this.dataStorageService.dataStoreProduct();
  }
}
