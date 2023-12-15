import React, { useEffect } from "react";
import { auth } from "../firebase";
import { signInWithRedirect, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import { useStateContext } from "../Context";
import { StyledLoginButton } from "./style/content/aside/Aside.style";

export const LoginButton = () => {
    const {setUser, setIsLogin, render, setRender} = useStateContext();

    const provider = new GoogleAuthProvider();

    const handleLogin = () => {
        signInWithRedirect(auth, provider);
        window.localStorage.setItem("click", false);
    }

    useEffect(() => {
        getRedirectResult(auth)
        .then((result) => {
            if (!result) return;
            const User = result.user.providerData[0];
            if (User.email.indexOf("@sdh.hs.kr") !== -1) {
                const date = new Date();
                const newUser = {
                    name: User.displayName,
                    grade: parseInt(User.email.substring(3, 5)) - (date.getFullYear() - 2000) + 1,
                    class: parseInt(User.email.substring(5, 7)),
                    number: parseInt(User.email.substring(7, 9)),
                    imgUrl: User.photoURL,
                    uid: User.uid
                }
                window.localStorage.removeItem("click")
                setUser(newUser);
                window.localStorage.setItem("User", JSON.stringify(newUser))
                setIsLogin(true);
                return
            }
            alert("해당 이메일은 지원하지 않습니다.")
            window.localStorage.removeItem("click");
            setRender(!render)
        })
        .catch((error) => {
            window.localStorage.removeItem("click");
            throw error;
        })
    })

    return(
        <>
            <StyledLoginButton onClick={handleLogin}>
                로그인
            </StyledLoginButton>
        </>
    )
}

