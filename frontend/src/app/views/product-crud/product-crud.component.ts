import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router'

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Route) { }

  ngOnInit(): void {
  }

  navigateToProductCreate(): void {
    console.log('teste')
  }

}
