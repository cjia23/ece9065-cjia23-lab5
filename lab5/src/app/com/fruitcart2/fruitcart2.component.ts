import { Component, OnInit } from '@angular/core';
import { ItemlistService } from 'src/app/service/itemlist.service';
import { Cart, Item,ShoppingCart } from 'src/app/model/item';
import { Observable } from 'rxjs';
import { ShoppingcartService } from 'src/app/service/shoppingcart.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-fruitcart2',
  templateUrl: './fruitcart2.component.html',
  styleUrls: ['./fruitcart2.component.css']
})
export class Fruitcart2Component implements OnInit {

  constructor(private myservice: ItemlistService, private scservice: ShoppingcartService,
              private myauthservice: AuthService ) {
    
    this.myauthservice.setUserstatus()
          .subscribe(data => {this.username = data.toString();})
    
    
  }
  title = "Here is the list of the items";
  items;
  rating;
  comment;
  userShoppingCart;
  cartlist;
  
  boughtItems: Observable<Item[]>;
  bought_quantity;
  commentlist: Comment[];
  selectedItem: Item;
  username;
  selectedshoppingcart: ShoppingCart;
  
  ngOnInit() {
    this.items = this.getItems();
    console.log(this.items);
    this.scservice.getShoppingCart().subscribe(data => this.userShoppingCart = data );
    
  }
  

  onSelect(item: Item): void{
    this.selectedItem = item;
    this.commentlist = this.selectedItem.comment.slice(0,5);
  }
  
  addanItem(){
    this.myservice.addanItem();
  }
  
  getItems(){
    this.myservice.getItems()
        .subscribe(data => this.items = data);
  }
  
  deleteanItem(item: Item): void{
    this.items = this.items.filter(h => h !==Item);
    this.myservice.deleteanItem(item).subscribe();
  }
  
  addComment(item: Item){
    item = this.selectedItem;
    this.myservice.addComment(item);
    
    if( Number(this.rating) <= 0 
        || Number(this.rating) > 5 
        || Number(this.rating) == null){
      window.alert("please enter a valid comment.")
    }
  }
  
  createshoppingCart(item: Item){
    console.log('hi1');
    item = this.selectedItem;
    this.scservice.createShoppingCart(item);
    console.log('hi2');
  }
  
  onSelectsc(shoppingcart:ShoppingCart): void{
    this.selectedshoppingcart = shoppingcart;
    this.cartlist = this.selectedshoppingcart.cart
  }
  
  getanShoppingCart(shoppingcart: ShoppingCart){
    this.scservice.getShoppingCart().subscribe(data => {this.userShoppingCart = data});
  }
  
  deleteShoppingCart(shoppingcart: ShoppingCart): void{
    
    this.userShoppingCart = this.userShoppingCart.filter(h => h !== shoppingcart);
    this.scservice.deleteShoppingCart(shoppingcart).subscribe()
  }
  
  buyanitemtoSC(shoppingcart: ShoppingCart, item: Item){
    item = this.selectedItem;
    shoppingcart = this.selectedshoppingcart;
    
    this.scservice.buyanitemtoSC(shoppingcart,item)
  }
  
  editscName(shoppingcart: ShoppingCart){
    shoppingcart = this.selectedshoppingcart
    this.scservice.editSC(shoppingcart);
  }
  
  
  removeItem(shoppingcart: ShoppingCart){
    shoppingcart = this.selectedshoppingcart;
    
    
    this.scservice.removeItem(shoppingcart);
  }
  
  changequantity(shoppingcart: ShoppingCart){
    shoppingcart = this.selectedshoppingcart;
    
    
    this.scservice.updateItem(shoppingcart);
  }
  
}



  
  
