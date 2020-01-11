import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { ProductService } from "./product.service";
import { AuthService } from "./auth.service";
@Injectable()
export class DataStorageService {

    constructor(private http: Http,
                private psService: ProductService,
                private athService: AuthService) { }

    dataStoreProduct() {
        return this.http.put('https://assigment-8817d.firebaseio.com/p.json',this.psService.getProducts());
    }

    getProduct(){
       const token = this.athService.getIdToken();
    }
}