import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product => {this.product = this.product});
   }

  cancel(): void {
    this.router.navigate(['/product'])
  }

  deleteProduct(): void{
    this.productService.delete('id').subscribe(() => {
      this.productService.showMessage("Deletado")
      this.router.navigate(['/product'])
    })
  }

}