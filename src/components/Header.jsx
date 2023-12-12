import React from "react";
import { Logo } from "./Logo";
import { StyledHeader } from "./style/header/Header.style";

export const Header = () => {
    return(
        <StyledHeader>
            <Logo/>
        </StyledHeader>
    )
}