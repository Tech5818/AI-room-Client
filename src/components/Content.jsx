import React from "react";
import styled from "styled-components";
import { Aside } from "./Aside";
import { MainContent } from "./MainContent";

export const Content = () => {


    return(
        <>
            <StyledContainer>
                <Aside/>
                <MainContent/>
            </StyledContainer>
        </>
    )
}

const StyledContainer = styled.div`
    width: 100vw;
    height: calc(100vh - 90px);
    display: flex;
`;