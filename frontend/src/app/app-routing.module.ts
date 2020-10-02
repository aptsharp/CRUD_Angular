import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { AboutComponent } from './views/about/about.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path:"products",
  component: ProductCrudComponent
},
{
path:"about",
component: AboutComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
