import React from "react";
import { AsideLogin } from "./AsideLogin";
import { useStateContext } from "../Context";
import { LoginButton } from "./LoginButton";
import { StyledAside, StyledNotLoginView,StyledLoginSection, StyledLoading, StyledLoginView, StyledText } from "./style/content/aside/Aside.style";

export const Aside = () => {
    const {isLogin} = useStateContext();

    return(
        <>
            <StyledAside>
                {isLogin ? (
                    <StyledLoginView>
                        <AsideLogin />
                    </StyledLoginView>
                ) : (
                    <StyledNotLoginView>
                        {window.localStorage.getItem("click") === false || window.localStorage.getItem("click") === null ? (
                            <>
                            <AsideLogin/>
                            </>
                        ) : (<StyledLoading>Loading...</StyledLoading>)}
                        <StyledLoginSection style = {window.localStorage.getItem("click") !== "false" ? {} : {display: "none"}}>
                                <StyledText>
                                    로그인이 필요합니다.
                                </StyledText>
                                <LoginButton/>
                            </StyledLoginSection>
                    </StyledNotLoginView>
                )}
            </StyledAside>
        </>
    )
}