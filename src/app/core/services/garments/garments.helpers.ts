import { ApiGarment } from "./api/models/api-garment.models";
import { Garment } from "./models/garment.models";


export function transformGarment(garmentEl: ApiGarment): Garment {
    delete garmentEl.createdAt && garmentEl.updatedAt && garmentEl.__v;
    return {
        ...garmentEl
    };

}