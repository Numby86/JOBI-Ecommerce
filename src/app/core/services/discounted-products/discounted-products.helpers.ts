import { ApiDiscountedProduct } from "./api/models/api-discounted-products.models";
import { DiscountedProduct } from "./models/discounted-product.models";

export function transformDiscountedProduct(productEl: ApiDiscountedProduct): DiscountedProduct {
    delete productEl.createdAt && productEl.__v && productEl.updatedAt;
    return {
        ...productEl
    }
}