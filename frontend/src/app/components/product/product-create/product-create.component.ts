import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import {Route} from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private ProductService: ProductService, private Route: Route) { }

  ngOnInit(): void {
  }

  createProduct(): void{
    this.ProductService.showMessage('Criado com sucesso')
  }

  cancel(): void{
    this.Route.navigate('/products')
    
  }

}
