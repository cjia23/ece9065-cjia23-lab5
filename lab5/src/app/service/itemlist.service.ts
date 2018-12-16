import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Item } from 'src/app/model/item';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


  const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };
  
  const url: string = "https://ece9065-cjia23-backend-fengchuiyu.c9users.io/api/items";
  
@Injectable({
  providedIn: 'root'
})

export class ItemlistService implements Item {
  
  constructor(private http: HttpClient) { }
  
  getItems(): Observable<Item[]>{
    return this.http.get<Item[]>(url);
  };
  
  name;
  quantity;
  price;
  tax_rate;
  item_description;
  sold_quantity;
  _id;
  
  
  //add an item to the server
  addanItem(){
   
    let itemdata = {
     "name": (<HTMLInputElement>document.getElementById("item_name")).value,
     "quantity": (<HTMLInputElement>document.getElementById("item_quantity")).value,
     "tax_rate": (<HTMLInputElement>document.getElementById("item_price")).value,
     "price": (<HTMLInputElement>document.getElementById("item_tax_rate")).value,
     "item_description": (<HTMLInputElement>document.getElementById("item_description")).value,
     "item_sold_quantity": (<HTMLInputElement>document.getElementById("item_sold_quantity")).value
     }
     
    let options = {
                    method: 'POST',
                    body: JSON.stringify(itemdata),
                    headers: new Headers({'Content-Type': 'application/json'})
                }
    console.log(itemdata);       
    this.http.post(url,itemdata)
            .subscribe(itemdata => {console.log("Item created!"), itemdata})
                  
  }
  
  //delete an item by ID in the server
  deleteanItem(item: Item): Observable<Item>{
    let new_url = url + `/${item._id}`;
    return this.http.delete<Item>(new_url, httpOptions)
  }
  
}
