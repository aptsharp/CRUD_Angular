import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private snackBar: MatSnackBar) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, '', {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top"
    }
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
*/
