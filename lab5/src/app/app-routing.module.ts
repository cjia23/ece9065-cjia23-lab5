import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FruitlistComponent} from 'src/app/com/fruitlist/fruitlist.component';
import {FruitcartComponent} from 'src/app/com/fruitcart/fruitcart.component';

const routes: Routes = [
  {path: 'fruitlist', component: FruitlistComponent},
  {path: 'fruitcart', component: FruitcartComponent}
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
