export interface Product {
    _id: string,
    name: string,
    image: string
    price: number,
    category: string,
    description: string,
    stock: number,
    type?: string[],
    author?: string[],
    pages?: number,
    editorial?: string,
    languague?: string,
    bookbinding?: string,
    yearEdition?: number,
    isbn?: number,
    size?: GarmentSize;
    color?: string;
    platform?: string,
    decades?: string,
    brand?: string,
    subcategory?: string,
    tags?: string[],
    materials?: string[],
    age?: string,
}


export type GarmentSize = 'S' | 'M' | 'L';

export type Category =
'libros'
| 'juguetes'
| 'ropa'
| 'videojuegos';