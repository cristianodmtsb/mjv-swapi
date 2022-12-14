import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUserLogin } from "../../pages/Login/types";
import { db } from "../../services/db";
import { IAuthContext, IAuthProviderProps, IUser, IUserLoginResponse } from "./types";

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function AuthProvider({ children }: IAuthProviderProps) {
    const [user, setUser] = useState<IUser | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token =  localStorage.getItem('@starwars:token');
        if (!token) {
            return;
        }
    }, []);

    async function login(data: IUserLogin) {
        try {
            const response = await db.post<IUserLoginResponse>('/sessions', data);
            console.log(response.data)
            const { user, token } = response.data;

            localStorage.setItem('@starwars:token', token);
            setUser(user);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
        
    }

    return (
        <AuthContext.Provider value={{ login, user }}>
            { children }
        </AuthContext.Provider>
    )
}