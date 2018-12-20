export class Comment {
    username: String;
    comment: String;
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
