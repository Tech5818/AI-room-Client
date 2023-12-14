import React, { useEffect, useState } from "react";
import { getAllPeople } from "../apis/Room/getAllPeople";
import { useStateContext } from "../Context";
import _isEqual from "lodash/isEqual";
import { StyledContainer, StyledImg, StyledListItem } from "./style/content/main/list/List.style";

/**
 * 
 * @returns 입실된 사람들의 명단이 정리되어 있는 component
 */
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
                        <StyledImg src={element.user.imgUrl} alt="aa"/>
                        {element.user.name}
                    </StyledListItem>
                    ) : (<></>)
                ))) : (<></>)}
            </StyledContainer>
        </>
    )
}

