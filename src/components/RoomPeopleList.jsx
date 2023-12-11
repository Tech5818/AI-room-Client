import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllPeople } from "../apis/Room/getAllPeople";

export const RoomPeopleList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await getAllPeople();
            return data
        }
        setList(getData());

    },[])

    return(
        <>
            <StyledContainer>
                미완
            </StyledContainer>
        </>
    )
}

const StyledContainer = styled.div`
    width: 100%;
    height: 550px;
    background: #fff;
    border: 0.5px solid #bbb;
    border-radius: 30px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
    padding: 30px;
`;