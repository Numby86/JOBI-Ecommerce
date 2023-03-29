import { Product } from './../products/models/product.models';

export interface Order {
    products: Product[],
    user?: string | null,
    total?: number
}
