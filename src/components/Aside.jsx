import React from "react";
import styled from "styled-components";
import { AsideLogin } from "./AsideLogin";
import { useStateContext } from "../Context";
import { LoginButton } from "./LoginButton";

export const Aside = () => {
    const {isLogin} = useStateContext();
    return(
        <>
            <StyledAside>
                {isLogin ? (
                    <StyledLoginView>
                        <AsideLogin/>
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

const StyledAside = styled.aside`
    width: 300px;
    height: 100%;
    box-shadow: 2px 0 2px rgba(0, 0, 0, 0.2);
    padding: 20px;
`
const StyledNotLoginView = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
`
const StyledLoginSection = styled.div`
    position: absolute;
    transform-origin: center;
    background: transparent;
    width: 100%;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`
const StyledLoading = styled.div`
    font-size: 32px;
    font-family: bold;
`
const StyledLoginView = styled.div`
    
`
const StyledText = styled.p`
    font-size: 22px;
    font-family: bold;
    text-align: center;
`;
