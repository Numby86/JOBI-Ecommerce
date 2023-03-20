export interface ApiToysInterface {
    _id: string,
    name: string,
    decades: string,
    brand: string,
    category: string,
    subcategory: string,
    tags: string[],
    materials: string[],
    age: string,
    price: number,
    description:Text,
    image: string,
    stock: number,
    __v?: number,
    createdAt?: number;
    updatedAt?: number;
}