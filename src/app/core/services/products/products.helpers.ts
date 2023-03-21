import { ApiProduct } from "./api/models/api-product.models";
import { Product } from "./models/product.models";



export function transformProduct(productEl: ApiProduct): Product {
    delete productEl.createdAt && productEl.__v && productEl.updatedAt;
    return {
        ...productEl
    }
}