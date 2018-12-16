import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitlistComponent } from './com/fruitlist/fruitlist.component';
import { HttpClientModule } from '@angular/common/http';
import { FruitcartComponent } from './com/fruitcart/fruitcart.component';
import {MatTableModule} from '@angular/material/table';
import { FruitDetailComponent } from './com/fruit-detail/fruit-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitlistComponent,
    FruitcartComponent,
    FruitDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
