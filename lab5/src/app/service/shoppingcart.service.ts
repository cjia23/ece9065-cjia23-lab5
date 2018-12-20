import { Injectable } from '@angular/core';
import { Comment,Item, ShoppingCart } from 'src/app/model/item';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

const url : string = "https://ece9065-cjia23-backend-fengchuiyu.c9users.io/api/shoppingcart";

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {
  
  constructor(private http: HttpClient, private myauthservice: AuthService) { 
    this.myauthservice.setUserstatus()
          .subscribe(data => {this.username = data.toString();})
  }
  
  username: String;
  sc_description;
  SC_name;
  bought_quantity;
  item: Item;
  
  createShoppingCart(item: Item){
    console.log('hi');
    this.item = item;
    this.bought_quantity= (<HTMLInputElement>document.getElementById("bought_quantity")).value;
    let scdata = {
     "visibility": "private",
     "username": this.username,
     "description": (<HTMLInputElement>document.getElementById("sc_description")).value.toString(),
     "SC_name": (<HTMLInputElement>document.getElementById("sc_name")).value.toString(),
     "total_cost": (this.bought_quantity * item.price*(1+item.tax_rate)),
     "cart": [{
        "bought_quantity": this.bought_quantity,
        "item_name": this.item.name,
        "item_price": this.item.price
     }]
     }
     
     let itemoption = {
                    method: 'POST',
                    body: JSON.stringify(scdata),
                    headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
                
    console.log(scdata);       
    this.http.post(url,scdata).subscribe(scdata => {scdata})
  }
  
  deleteShoppingCart(sc: ShoppingCart){
    let new_url = url + `/${sc._id}`;
    
    return this.http.delete<ShoppingCart>(new_url)
  }
  
  getShoppingCart(){
    let new_url = url
    
    return this.http.get(new_url)
  }
  
  getselectedShoppingCart(shoppingcart: ShoppingCart){
    let new_url = url + `/${shoppingcart._id}` + '/cartlist';
    
    return this.http.get(new_url)
  }
  
  buyanitemtoSC(shoppingcart: ShoppingCart, item: Item){
    let new_url = url + `/${shoppingcart._id}`;
    
    this.bought_quantity= (<HTMLInputElement>document.getElementById("bought_quantity")).value;
    
    let itemdata = {
      item_name: item.name,
      bought_quantity: this.bought_quantity,
      item_price: item.price
    }
    
    console.log(itemdata)
    return this.http.put(new_url, itemdata).subscribe();
  }
  
  editSC(shoppingcart: ShoppingCart){
     let new_url = url + `/${shoppingcart._id}`;
     
     let new_name = {
       "SC_name": (<HTMLInputElement>document.getElementById("sc_name")).value.toString(),
       "description": (<HTMLInputElement>document.getElementById("sc_description")).value.toString(),
       "visibility": (<HTMLInputElement>document.getElementById("sc_description")).value.toString()
     };
     
     console.log(new_name);
     this.http.post(new_url,new_name).subscribe(new_name => new_name);
  }
  
  removeItem(shoppingcart: ShoppingCart){
    let new_url = url + `/${shoppingcart._id}`+ '/cartlist';
     
    let new_index = {
       "item_index": (<HTMLInputElement>document.getElementById("item_index")).value,
     };
     
     console.log(new_index);
     this.http.delete(new_url,new_index).subscribe(new_index => new_index);
  }
  
  updateItem(shoppingcart: ShoppingCart){
    let new_url = url + `/${shoppingcart._id}`+ '/cartlist';
     
    let new_index = {
       "item_index": (<HTMLInputElement>document.getElementById("item_index")).value,
       "new_to_buy_quantity": (<HTMLInputElement>document.getElementById("new_to_buy_quantity")).value
     };
     
     console.log(new_index);
     this.http.put(new_url,new_index).subscribe(new_index => new_index);
  }
}
