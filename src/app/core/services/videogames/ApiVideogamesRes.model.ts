export interface APIVideogamesRes {
    _id:         string;
    name:        string;
    image:       string;
    price:       number;
    category:    string;
    description: string;
    plataforma:  string;
    stock:       number;
    __v?:         number;
    createdAt?:   number;
    updatedAt?:   number;
}
