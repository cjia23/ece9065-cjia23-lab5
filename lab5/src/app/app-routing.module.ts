import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FruitlistComponent } from 'src/app/com/fruitlist/fruitlist.component';
import { FruitcartComponent } from 'src/app/com/fruitcart/fruitcart.component';
import { LoginComponent } from 'src/app/auth/login/login.component';
import { MainDeskComponent } from 'src/app/auth/main-desk/main-desk.component';
import { RegisterComponent } from 'src/app/auth/register/register.component';
import { UserDashboardComponent } from 'src/app/auth/user-dashboard/user-dashboard.component';
import { UserlistComponent } from 'src/app/com/userlist/userlist.component';
import { Fruitcart2Component} from 'src/app/com/fruitcart2/fruitcart2.component';

const routes: Routes = [
  {path: 'fruitlist', component: FruitlistComponent},
  {path: 'fruitcart', component: FruitcartComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {
    path: 'main', component: MainDeskComponent, children:
    [
        { path: '', redirectTo: 'login', pathMatch: 'full'},
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent }
    ]
  },
  {path: 'dash' , component: UserDashboardComponent},
  {path: 'userlist', component: UserlistComponent},
  {path: 'fruitcart2', component: Fruitcart2Component}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
