import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FruitlistComponent } from './com/fruitlist/fruitlist.component';
import { HttpClientModule } from '@angular/common/http';
import { FruitcartComponent } from './com/fruitcart/fruitcart.component';
import { MatTableModule } from '@angular/material/table';
import { FruitDetailComponent } from './com/fruit-detail/fruit-detail.component';
import { LoginComponent } from './auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule} from '@angular/material/input';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material';
import { MainDeskComponent } from './auth/main-desk/main-desk.component';
import { RegisterComponent } from './auth/register/register.component';
import { UserDashboardComponent } from './auth/user-dashboard/user-dashboard.component';
import { AuthService } from 'src/app/service/auth.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ShoppingcartComponent } from './com/shoppingcart/shoppingcart.component';
import { UserlistComponent } from './com/userlist/userlist.component';
import { Fruitcart2Component } from './com/fruitcart2/fruitcart2.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitlistComponent,
    FruitcartComponent,
    FruitDetailComponent,
    LoginComponent,
    MainDeskComponent,
    RegisterComponent,
    UserDashboardComponent,
    ShoppingcartComponent,
    UserlistComponent,
    Fruitcart2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
