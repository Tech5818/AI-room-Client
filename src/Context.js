import React, {createContext, useState, useContext} from "react";

const Context = createContext();

export const ContextProvider = ({children}) => {
    const [isLogin, setIsLogin] = useState(false); // 로그인 여부
    const User = {
        name: "guest",
        grade: "1",
        class: "1",
        number: "11",
    }
    const [user, setUser] = useState(User); // 유저 정보
    const [render, setRender] = useState(true); // 렌더링 state

    return(
        <Context.Provider value={{isLogin, setIsLogin, user, setUser, render, setRender}}>
            {children}
        </Context.Provider>
    )
};

export const useStateContext = () => {
    return useContext(Context);
};