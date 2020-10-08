import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
// import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/products"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  // Observable é baseado em envento, ocorre somente quando é feito algo

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product)
  }

  read(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl)
  }

  readById(id: string): Observable<Product>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Product>(url);
  }

  update(product: Product): Observable<Product>{
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url,product)
  }

}


/*
o que é injeção de dependencia?
- Exemplo de jornal.
sem injeção de dependencia a pessoa que acorda cedo tem que ir ate uma banca para buscar o jornal;
Com a injeção de dependencia, é fornecido um serviço que leva o jornal ate a sua casa todos os dias
e você faz o usso do jornal como desejar. 

-> No Angular a injeção de dependencia é somente via construtor.

-> no service fica a chamada a aplicação back end

-> utilização do singleton (classe que tem uma unica instancia)
*/
