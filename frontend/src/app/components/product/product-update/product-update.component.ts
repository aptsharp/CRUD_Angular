import { Product } from './../product.model';
import { NavComponent } from './../../template/nav/nav.component';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    const id= this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product => {this.product = product});
  }

  updateProduct(): void{
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Atualizado")
      this.router.navigate(["/products"]);
    })
  }

  cancel(): void{
    this.router.navigate(['/products']);
  }

}