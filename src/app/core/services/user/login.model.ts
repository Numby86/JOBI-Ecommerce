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
    createdAt?: Date;
    updatedAt?: Date;
    __v?:       number;
}
