import { ApiToysInterface } from "./api/models/api-toys.models";
import { ToysInterface } from "./models/toys.models";


export function transfToy(toy: ApiToysInterface): ToysInterface {
    delete toy.createdAt && toy.updatedAt && toy.__v;
    return {
        ...toy
    };

}