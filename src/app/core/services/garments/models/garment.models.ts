export interface Garment {
    _id: string;  
    name: string;
    image: string;
    price: number;
    category: string;
    description: string;
    stock: number;
    size: GarmentSize;
    color: string;
    
  }
  
  export type GarmentSize = 'S' | 'M' | 'L';
  