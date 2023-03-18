export interface ApiBook {
    _id: string,
    name: string,
    image: string
    price: number,
    category: string[],
    description: string,
    stock: number,
    type: string[],
    author: string[],
    pages: number,
    editorial: string,
    languague: string,
    bookbinding: string,
    yearEdition: number,
    isbn: number,
    __v?: number,
    createdAt?: number,
    updatedAt?: number
}