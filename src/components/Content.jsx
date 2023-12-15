import React from "react";
import { Aside } from "./Aside";
import { MainContent } from "./MainContent";
import { StyledContainer } from "./style/content/Content.style";

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

