export class Comment {
    username: String;
    comment: String;
}

export class Cart {
           bought_quantity: Number;
           item: Item;
           cost: Number;
}

export class Item {
    name: String;
    quantity: Number;
    tax_rate: Number;
    price: Number;
    sold_quantity: Number;
    description: String;
    _id: String;
    rating:Number;
    comment: [{
        username: String;
        comment: String;
    }]; 
}

export class ShoppingCart {
    _id: String;
    visibility: String;
    username: String;
    description: String;
    SC_name: String;
    cart: [{bought_quantity: Number;
           item_name: String;
           item_price: Number
          }];
    total_cost: Number;
}
