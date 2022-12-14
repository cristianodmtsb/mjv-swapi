import { ReactNode } from "react";
import { IUserLogin } from "../../pages/Login/types";

export interface IAuthProviderProps {
    children: ReactNode;
}

export interface IAuthContext {
    login(data: IUserLogin): Promise<void>
    user: IUser | null
}

export interface IUser {
    id: number;
    username: string;
    email: string;
    password: string;    
}

export interface IUserLoginResponse {
    user: IUser;
    token: string;
}