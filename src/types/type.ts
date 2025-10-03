export enum Role {
    admin = "admin",
    user = "user"
}


export interface IUserPayload {
    id: number;
    email: string;
    role: Role;
    name: string;
    address: string | null;
    image: string | null;
    createdAt: Date;
}

