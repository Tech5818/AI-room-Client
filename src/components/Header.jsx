import React from "react";
import styled from "styled-components";
import { Logo } from "./Logo";

export const Header = () => {
    return(
        <StyledHeader>
            <Logo/>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    width: 100vw;
    height: 90px;
    display: flex;
    background: #fff;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
    align-items: center;
    padding: 0 20px;
`;