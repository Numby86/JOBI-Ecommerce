import { Products } from './ApiProducts.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API_PRODUCTS_URL = 'https://nodejs-proyectodb-fzekcq71e-numby86.vercel.app/products';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private myList: Products[] = [];

  private myCart = new BehaviorSubject<Products[]>([]);
  myCart$ = this.myCart.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  public getApiProducts(): Observable<Products[]>{
    return this.http.get<Products[]>(API_PRODUCTS_URL);
  }

  public getApiProductsDetail(id: string): Observable<Products>{
    return this.http.get<Products>(`${API_PRODUCTS_URL}/${id}`);
  }

  public addProduct(product: Products){

    if (this.myList.length === 0) {
      product.stock = 1;
      this.myList.push(product);
      this.myCart.next(this.myList);
    } else {
      const productMod = this.myList.find((element) => {
        return element._id === product._id;
      });
      if (productMod) {
        productMod.stock = productMod.stock + 1;
        this.myCart.next(this.myList);
      } else {
        product.stock = 1;
        this.myList.push(product);
        this.myCart.next(this.myList);
      }
    }
  }

  public deleteProduct(id: string){
    this.myList = this.myList.filter((product) => {
      return product._id != id;
    })
    this.myCart.next(this.myList);
  }

  public findProductById(id: string){
    return this.myList.find((element) => {
      return element._id === id;
    })
  }

  public totalCart(){
    const total = this.myList.reduce(function(acc, product){
        return acc + (product.stock * product.price);
      }, 0);
      return total;
  }

  public totalNumProducts(){
    const totalProducts = this.myList.length;
    return totalProducts;
  }
}
