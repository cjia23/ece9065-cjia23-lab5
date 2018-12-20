import { Component, OnInit } from '@angular/core';
import { ItemlistService } from 'src/app/service/itemlist.service';
import { Item } from 'src/app/model/item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fruitcart2',
  templateUrl: './fruitcart2.component.html',
  styleUrls: ['./fruitcart2.component.css']
})
export class Fruitcart2Component implements OnInit {

  constructor(private myservice: ItemlistService) { }
  title = "Here is the list of the items";
  items;
  
  
  boughtItems: Observable<Item[]>;
  bought_quantity;
  commentlist: Comment[];
  selectedItem: Item;
  
  ngOnInit() {
    this.items = this.getItems();
    console.log(this.items);
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
    
    if(this.rating <=0 || this.rating >5 || this.rating == ""){
      window.alert("please enter a valid comment.")
    }
  }
  
  
  }
