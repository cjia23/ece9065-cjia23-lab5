import { Component, OnInit } from '@angular/core';
import { ItemlistService } from 'src/app/service/itemlist.service';
import { Comment,Item } from 'src/app/model/item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fruitcart',
  templateUrl: './fruitcart.component.html',
  styleUrls: ['./fruitcart.component.css']
})
export class FruitcartComponent implements OnInit {

  constructor(private myservice: ItemlistService) {
    
  };
  title = "Here is the list of the items";
  items;
  
  selectedItem: Item;
  commentlist: Comment[];
  
  ngOnInit() {
    this.items = this.getItems();
  }
  
  onSelect(item: Item): void{
    this.selectedItem = item;
    this.commentlist = this.selectedItem.comment.slice(0,5);
  }
  
  //add an item
  addanItem(){
    
    this.myservice.addanItem();
        
  }
  
  //get items
  getItems(){
    this.myservice.getItems()
        .subscribe(data => this.items = data);
  }
  
  //delete an item
  deleteanItem(item: Item): void{
    this.items = this.items.filter(h => h !==Item);
    this.myservice.deleteanItem(item).subscribe();
  }
  
}
