import React from "react";
import styled from "styled-components";
import Logo_img from "../assets/img/Logo.png"

export const Logo = () => {
    return(
        <>
            <StyeldLogo src={Logo_img} />
        </>
    )
}

const StyeldLogo = styled.img`
    width: 220px;
    height: 90px;
`;