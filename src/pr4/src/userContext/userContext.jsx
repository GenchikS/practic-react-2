import { createContext, useContext, useState } from "react";

// необхідно для main
export const userContext = createContext();

// необхідно для компонента UserMenu
export const useUser = () => useContext(userContext);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoading] = useState(false);
    const [userName, setUserName] = useState(null);
    
    const logIn = () => {
        setIsLoading(true);
        setUserName("Test start")
}

    const logOut = () => {
        setIsLoading(false);
        setUserName(null)
    }
    return (
        <userContext.Provider value={{ isLoggedIn, userName, logIn, logOut }}>
            {children}
    </userContext.Provider>
)    

};