import { Component, OnInit, Input} from '@angular/core';
import { Item } from 'src/app/model/item';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  
  @Input() item: Item;
  
  constructor() { }

  ngOnInit() {
  }

}
