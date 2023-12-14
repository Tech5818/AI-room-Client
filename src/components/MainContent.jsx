import React from "react";
import { RoomEnter } from "./RoomEnter";
import { RoomPeopleList } from "./RoomPeopleList";
import { RoomLeave } from "./RoomLeave";
import { StyledContainer } from "./style/content/main/Main.style";

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