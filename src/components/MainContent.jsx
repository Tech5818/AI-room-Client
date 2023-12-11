import React from "react";
import styled from "styled-components";
import { RoomEnter } from "./RoomEnter";
import { RoomPeopleList } from "./RoomPeopleList";
import { RoomLeave } from "./RoomLeave";

export const MainContent = () => {
    return(
        <>
            <StyledContainer>
                <RoomEnter/>
                <RoomPeopleList/>
                <RoomLeave/>
            </StyledContainer>
        </>
    )
}

const StyledContainer = styled.div`
    width: calc(100vw - 300px);
    height: 100%;
    padding: 30px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
`;