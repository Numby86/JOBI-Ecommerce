export interface Products {
    _id:          string;
    name:         string;
    image:        string;
    price:        number;
    category:     Category;
    description:  string;
    stock:        number;
    type?:         string[];
    author?:       string[];
    pages?:       number;
    editorial?:   string;
    languague?:   Languague;
    bookbinding?: Bookbinding;
    yearEdition?: number;
    isbn?:        number;
    __v?:          number;
    createdAt?:    Date;
    updatedAt?:    Date;
    size?:        Size;
    color?:       string;
    platform?:    Platform;
    decades?: string,
    brand?: string,
    subcategory?: string,
    tags?: string[],
    materials?: string[],
    age?: string,
}

export enum Bookbinding {
    EBook = "eBook",
    TapaBlanda = "Tapa blanda",
    TapaDura = "Tapa dura",
}

export enum Category {
    Juguetes = "juguetes",
    Libros = "libros",
    Ropa = "ropa",
    Videojuegos = "videojuegos",
}

export enum Languague {
    Castellano = "castellano",
}

export enum Platform {
    NintendoSwitch = "Nintendo Switch",
    Ps4 = "PS4",
    Ps5 = "PS5",
    Xbox = "Xbox",
}

export enum Size {
    L = "L",
    M = "M",
    S = "S",
}