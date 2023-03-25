export interface Order {
    name:        string;
    image:       string;
    price:       number;
    category:    string;
    stock:       number;
    type:        string[];
    products:    object[];
    users:       object[];
}