import { useEffect } from "react";
import { Main } from "./components/page/Main";
import { useStateContext } from "./Context";


function App() {
    const {setIsLogin, setUser, isLogin} = useStateContext();

    const User = JSON.parse(window.localStorage.getItem("User"))
    useEffect(() => {
        if (User) {
            if (!isLogin) {
                setUser(User)
            }
            setIsLogin(true);
        }
        console.log(User);
    },[User, setIsLogin, isLogin, setUser])
    return(
        <>
            <Main/>
        </>
    )
}

export default App;
