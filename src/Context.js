import React, {createContext, useState, useContext} from "react";

const Context = createContext();

export const ContextProvider = ({children}) => {
    const [isLogin, setIsLogin] = useState(false);
    const User = {
        name: "guest",
        grade: "1",
        class: "1",
        number: "11",
    }
    const [user, setUser] = useState(User);
    const [render, setRender] = useState(true);

    return(
        <Context.Provider value={{isLogin, setIsLogin, user, setUser, render, setRender}}>
            {children}
        </Context.Provider>
    )
};

export const useStateContext = () => {
    return useContext(Context);
};