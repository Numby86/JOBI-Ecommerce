export interface APIOrder {
    _id:       string;
    products:  Array<string[] | ProductClass | string>;
    users?:    string[];
    createdAt: Date;
    updatedAt: Date;
    __v:       number;
    user?:     null | string;
    total?:    number;
}

export interface ProductClass {
    _id:         string;
    name:        string;
    image:       string;
    price:       number;
    category:    string;
    description: string;
    stock:       number;
    type:        any[];
    author:      any[];
    platform:    string;
    tags:        any[];
    materials:   any[];
    __v:         number;
    updatedAt:   Date;
}