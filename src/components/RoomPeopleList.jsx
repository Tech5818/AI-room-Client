import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getAllPeople } from "../apis/Room/getAllPeople";
import { useStateContext } from "../Context";
import _isEqual from "lodash/isEqual";

export const RoomPeopleList = () => {
    const {render, setRender} = useStateContext();
    const [list, setList] = useState();

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getAllPeople();
                if (!list || !_isEqual(list, data)) {
                    setList(data)
                }else {
                    console.log(data);
                    console.log(list);
                }
            } catch (error) {
                throw error
            }
        }
        getData();
        console.log(render);
    },[list, setList, render])

    return(
        <>
            <StyledContainer>
                {!!list && list.length > 0 ? (list.map((element,idx) => (
                    !!element.user ? (
                    <StyledListItem key={idx}>
                        <img src={element.user.imgUrl} alt="aa" />
                        {element.user.name}
                    </StyledListItem>
                    ) : (<></>)
                ))) : (<></>)}
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
    overflow-y: scroll;
    display: flex;
    flex-flow: column nowrap;
    align-items: self;
    gap: 20px;
`;
const StyledListItem = styled.div`
    width: 100%;
    min-height: 90px;
    background: #fff;
    border: 1px solid #bbb;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
`;