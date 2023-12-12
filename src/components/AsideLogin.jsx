import React from "react";
import { useStateContext } from "../Context";
import { StyledContainer, StyledAsideTitle, StyledAsideTextSection, StyledAsideText, StyledImg } from "./style/aside/Aside.style";

export const AsideLogin = () => {
    const {user, isLogin} = useStateContext();
    return(
        <>
            <StyledContainer style={isLogin ? {} : {filter: "blur(14px)"}}>
                <StyledAsideTitle>
                    당신의 정보
                </StyledAsideTitle>
                <StyledAsideTextSection>
                    <StyledImg src={user.imgUrl} />
                    <StyledAsideText>
                        이름: {user.name}
                    </StyledAsideText>
                    <StyledAsideText>
                        학년: {user.grade}학년
                    </StyledAsideText>
                    <StyledAsideText>
                        반: {user.class}반
                    </StyledAsideText>
                    <StyledAsideText>
                        번호: {user.number}번
                    </StyledAsideText>
                </StyledAsideTextSection>
            </StyledContainer>
        </>
    )
}