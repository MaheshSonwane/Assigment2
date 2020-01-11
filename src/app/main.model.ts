export class Products{
  public Name:string;
  public Image:string;
  public Categories:string;
  public Price:number;

  constructor(name:string, image:string, categories:string, price:number){
      this.Name = name;
      this.Image = image;
      this.Categories = categories;
      this.Price = price;
  }
}