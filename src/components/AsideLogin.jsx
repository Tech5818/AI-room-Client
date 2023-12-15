import React from "react";
import { useStateContext } from "../Context";
import { StyledContainer, StyledAsideTitle, StyledAsideTextSection, StyledAsideText, StyledImg, StyledLogOutButton } from "./style/content/aside/Aside.style";
import { deleteData } from "../apis/Room/deletePeople";

export const AsideLogin = () => {
    const {user, isLogin, setIsLogin} = useStateContext();
    const handleLogOut = async () => {
        await deleteData(user.uid);
        window.localStorage.clear();
        setIsLogin(false);
    };

    return(
        <>
            <StyledContainer style={isLogin ? {} : {filter: "blur(14px)"}}>
                <StyledAsideTitle>
                    당신의 정보
                </StyledAsideTitle>
                <StyledAsideTextSection>
                    <StyledImg src={isLogin ? user.imgUrl: ""} />
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
                    <StyledLogOutButton onClick={handleLogOut} $isLogin={isLogin}>
                        로그아웃
                    </StyledLogOutButton>
                </StyledAsideTextSection>
            </StyledContainer>
        </>
    )
}