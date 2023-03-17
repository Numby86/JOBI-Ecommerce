import { ApiBook } from "./api/models/api-book.models";
import { Book } from "./models/book.models";


export function transformBook(bookEl: ApiBook): Book {
    delete bookEl.createdAt && bookEl.updatedAt && bookEl.__v;
    return {
        ...bookEl
    };

}