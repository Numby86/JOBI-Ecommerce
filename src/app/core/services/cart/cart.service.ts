import { Order } from './../order/order.model';
import { ProductAdd } from './Order.model';
import { Login } from './../user/login.model';
import { Router } from '@angular/router';
import { Product } from 'src/app/core/services/products/models/product.models';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { transformProduct } from '../products/products.helpers';

const API_PRODUCTS_URL = 'https://project-jobi-api.vercel.app/products';
const API_ORDER_URL = "https://project-jobi-api.vercel.app/cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private myList: Product[] = [];

  private myCart = new BehaviorSubject<Product[]>([]);
  myCart$ = this.myCart.asObservable();

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public getApiProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(API_PRODUCTS_URL);
  }

  public getApiProductsDetail(id: string): Observable<Product>{
    return this.http.get<Product>(`${API_PRODUCTS_URL}/${id}`);
  }

  public addProduct(product: Product){

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
      return total.toFixed(2);
  }

  public totalNumProducts(){
    const totalProducts = this.myList.length;
    return totalProducts;
  }

  public sendOrder(products: any): Observable<any>{
    console.log('llego');
    return this.http.post<any>(`${API_ORDER_URL}`, products)
  }

}
