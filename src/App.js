import { useEffect } from "react";
import { Main } from "./components/page/Main";
import { useStateContext } from "./Context";


function App() {
    const {setIsLogin, setUser, isLogin} = useStateContext();

    const User = JSON.parse(window.localStorage.getItem("User")) // 유저 정보 불러오기
    useEffect(() => {
        if (User && !isLogin) { // 유저 정보가 있는지에 대한 여부
            setUser(User) // localStorage에 있는 User 정보를 user state에 저장
            setIsLogin(true); // 로그인 상태 관리
        }
    },[User, setIsLogin, isLogin, setUser])
    return(
        <>
            <Main/>
        </>
    )
}

export default App;
