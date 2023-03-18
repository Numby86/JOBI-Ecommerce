import { Videogames } from './Videogames.model';
import { APIVideogamesRes } from './ApiVideogamesRes.model';


export function transformVideogame(apiVideogamesRes: APIVideogamesRes): Videogames {
    delete apiVideogamesRes.createdAt && apiVideogamesRes.__v && apiVideogamesRes.updatedAt
    return {
        ...apiVideogamesRes
    };
}