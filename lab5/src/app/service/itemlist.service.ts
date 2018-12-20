import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Comment, Item } from 'src/app/model/item';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth.service';

  
const url: string = "https://ece9065-cjia23-backend-fengchuiyu.c9users.io/api/items";
  
@Injectable({
  providedIn: 'root'
})

export class ItemlistService {
  
  constructor(private http: HttpClient, private myauthservice: AuthService) {
    this.myauthservice.setUserstatus()
          .subscribe(data => {this.username = data.toString();})
  }
  
  getItems(): Observable<Item[]>{
    return this.http.get<Item[]>(url)
  };
  
  name;
  quantity;
  price;
  tax_rate;
  description;
  sold_quantity;
  _id;
  rating;
  user_comment: Observable<Comment>;
  username;
  
  //add an item to the server
  addanItem(){
   
    let itemdata = {
     "name": (<HTMLInputElement>document.getElementById("item_name")).value,
     "quantity": (<HTMLInputElement>document.getElementById("item_quantity")).value,
     "tax_rate": (<HTMLInputElement>document.getElementById("item_price")).value,
     "price": (<HTMLInputElement>document.getElementById("item_tax_rate")).value,
     "description": (<HTMLInputElement>document.getElementById("item_description")).value,
     "sold_quantity": (<HTMLInputElement>document.getElementById("item_sold_quantity")).value,
     "rating": (<HTMLInputElement>document.getElementById("item_rating")).value,
     "comment": [{
        "username": "ChunyangJia",
        "comment": "very good"
     }]
     }
     
     let itemoption = {
                    method: 'POST',
                    body: JSON.stringify(itemdata),
                    headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
                
    console.log(itemdata);       
    this.http.post(url,itemdata).subscribe(itemdata => {itemdata})
                  
  }
  
  //delete an item by ID in the server
  deleteanItem(item: Item): Observable<Item>{
    let new_url = url + `/${item._id}`;
    return this.http.delete<Item>(new_url)
  }
  
  //update an item by ID in the server
  updateanItem(item: Item): Observable<Item>{
                  
    let new_url = url + `/${item._id}`;
    return this.http.put<Item>(new_url, item)
  }
  
  //get an item by ID in the server
  getanItem(item: Item): Observable<Item>{
                  
    let new_url = url + `/${item._id}`;
    return this.http.get<Item>(new_url)
    console.log("selected item updated.")
  }
  
  
  //add a comment to an item by authenticated user
  addComment(item: Item){
    
    let commentdata = {
      "username": this.username,
      "comment": (<HTMLInputElement>document.getElementById("user_comment")).value,
      "rating": (<HTMLInputElement>document.getElementById("rating")).value
      
    }
    
    let commentoption = {
                    method: 'POST',
                    body: JSON.stringify(commentdata),
                    headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    
    let new_url = url + `/${item._id}` + '/comment';
    console.log(commentdata);       
    return this.http.post(new_url,commentdata).subscribe(commentdata => commentdata)
  }
  
  
  getComment(item: Item){
    let new_url = url + `/${item._id}` + '/comment';
    
    let commentoption = {
                    method: 'GET',
                    headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
    
    
    return this.http.get(new_url)
    console.log("commentlist recieved!");
  }
}
  

