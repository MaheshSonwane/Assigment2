import { Products } from "./main.model";

export class ProductService{
   private products:Products[]=[
        new Products('Jeans Image','https://saltscout.com/pub/media/catalog/product/t/_/t_s_jeans_front.jpg',' mens Jeans',600),
        new Products('Blue Jeans Image','https://www.revzilla.com/product_images/0084/6856/agv_sport_alloy_kevlar_jeans_750x750.jpg','Lzaed slim men',800)
      ];


      getProducts(){
        return this.products.slice();
      }

      addProducts(addproduct: Products){
        this.products.push(addproduct);
      }
}