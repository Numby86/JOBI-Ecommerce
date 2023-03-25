export interface Order {
    products: ProductAdd,
    user: string
}

export interface ProductAdd {
    _id: string[];
    stock: number[];
}