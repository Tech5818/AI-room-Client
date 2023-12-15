import React, { useEffect, useState } from "react";
import { getAllPeople } from "../apis/Room/getAllPeople";
import _isEqual from "lodash/isEqual";
import { StyledContainer, StyledImg, StyledListItem, StyledTimeInfo, StyledUserInfo } from "./style/content/main/list/List.style";
import { useStateContext } from "../Context";

/**
 * 
 * @returns 입실된 사람들의 명단이 정리되어 있는 component
 */
export const RoomPeopleList = () => {
    const {render} = useStateContext();
    const [list, setList] = useState();

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await getAllPeople();
                if (!list || !_isEqual(list, data)) {
                    setList(data)
                }
            } catch (error) {
                throw error
            }
        }
        getData();
    },[list, setList, render])

    return(
        <>
            <StyledContainer>
                {!!list && list.length > 0 ? (list.map((element,idx) => (
                    !!element.user ? (
                    <StyledListItem key={idx}>
                        <StyledUserInfo key={idx + "user"}>
                            <StyledImg src={element.user.imgUrl} alt="aa" key={idx + "img"} />
                            {`${element.user.grade}학년 ${element.user.class}반 ${element.user.number}번 ${element.user.name}`}
                        </StyledUserInfo>
                        <StyledTimeInfo key={idx + "time"}>
                            {`${element.time.enter[0] - 12} : ${element.time.enter[1]} ~ ${element.time.leave[0] - 12} : ${element.time.leave[1]}`}
                        </StyledTimeInfo>
                    </StyledListItem>
                    ) : ("")
                ))) : ("")}
            </StyledContainer>
        </>
    )
}

