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
  
  selectedItem: Item;
  
  ngOnInit() {
    this.items = this.getItems();
    console.log(this.items);
  }
  
  onSelect(item: Item): void{
    this.selectedItem = item;
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
  
  buyItem(item: Item){
    if(item.quantity > 0 ){
        item.quantity --;
        item.sold_quantity ++;
        this.bought_quantity ++;
        console.log("1 " + item.name + " sold." );
    } else {
      console.log("item sold out");
    }
    
    this.myservice.updateanItem(item);
    
  }
  
}