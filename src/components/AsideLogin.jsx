import React from "react";
import styled from "styled-components";
import { useStateContext } from "../Context";

export const AsideLogin = () => {
    const {user, isLogin} = useStateContext();
    return(
        <>
            <StyledContainer style={isLogin ? {} : {filter: "blur(14px)"}}>
                <StyledAsideTitle>
                    당신의 정보
                </StyledAsideTitle>
                <StyledAsideTextSection>
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

const StyledContainer = styled.div`
    width: 100%;
    height: calc(100vh - 90px - 40px);
`;

const StyledAsideTitle = styled.p`
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 25px;
    font-family: bold;
`;

const StyledAsideTextSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 25px;
`;
const StyledAsideText = styled.p`
    font-size: 22px;

`;