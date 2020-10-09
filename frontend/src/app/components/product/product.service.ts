import { catchError, map } from 'rxjs/operators';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { EMPTY, Observable } from 'rxjs';
import { TOOLTIP_PANEL_CLASS } from '@angular/material/tooltip';
// import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  // Observable é baseado em envento, ocorre somente quando é feito algo

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product).pipe(map((obj) => obj),
    catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any>{
    this.showMessage("Error", true);
    return EMPTY;
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl).pipe(map((obj) => obj),
    catchError((e) => this.errorHandler(e)))
  }

  readById(id: string): Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url).pipe(map((obj) => obj),
    catchError((e) => this.errorHandler(e)))
  }

  update(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url,product).pipe(map((obj) => obj),
    catchError((e) => this.errorHandler(e)))
  }

  delete(id: number): Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Product>(url).pipe(map((obj) => obj),
    catchError((e) => this.errorHandler(e)))
  }

}