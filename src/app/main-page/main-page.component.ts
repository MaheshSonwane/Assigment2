import { Component, OnInit } from '@angular/core';
import { Products } from '../main.model';
import { ProductService } from '../product.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  products: Products[];
  constructor(private productServices: ProductService, private athService: AuthService) { } 

  ngOnInit() {
    this.products = this.productServices.getProducts();
  }
  LogOut(){
  this.athService.logOut();
  }
}
