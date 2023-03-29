export interface Login {
    email: string;
    password: string;
}


export interface LoginJWT {
    user:  User;
    token: string;
}

export interface User {
    _id:       string;
    email:     string;
    password?:  string | null;
    name?: string;
    surname?: string;
    phone?: number;
    avatar?: string;
    createdAt?: Date;
    updatedAt?: Date;
    __v?:       number;
}
