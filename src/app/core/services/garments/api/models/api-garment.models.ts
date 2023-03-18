export interface ApiGarment {
    _id: string;  
    name: string;
    image: string;
    price: number;
    category: string;
    description: string;
    stock: number;
    size: GarmentSize;
    color: string;
    __v?: number,
    createdAt?: number,
    updatedAt?: number
  }
  
  export type GarmentSize = 'S' | 'M' | 'L';
  