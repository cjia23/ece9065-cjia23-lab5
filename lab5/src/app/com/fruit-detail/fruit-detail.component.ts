import { Component, OnInit, Input } from '@angular/core';
import { Comment, Item } from 'src/app/model/item';
import { ItemlistService }from 'src/app/service/itemlist.service';

@Component({
  selector: 'app-fruit-detail',
  templateUrl: './fruit-detail.component.html',
  styleUrls: ['./fruit-detail.component.css']
})
export class FruitDetailComponent implements OnInit {

  constructor(private myservice: ItemlistService) { 
   
  }

  ngOnInit() {
  }
  
  @Input() item: Item;
  
  


}
