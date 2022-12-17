import { createContext } from "react";

export const UserContext = createContext({})

interface iProps {
    children: React.ReactNode
}

export const UserProvider = ({ children }:iProps) => {

    return(
        <UserContext.Provider value={{}}>
            { children }
        </UserContext.Provider>
    )
}