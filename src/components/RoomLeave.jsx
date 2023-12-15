import React from "react";
import { StyledContainer, StyledLeaveButton } from "./style/content/main/leave/Leave.style";
import { deleteData } from "../apis/Room/deletePeople";
import { useStateContext } from "../Context";

/**
 * 
 * @returns 퇴실 버튼을 포함하는 element
 */
export const RoomLeave = () => {
    const {user, setRender, render} = useStateContext();
    
    const handleClick = async () => {
        if(window.localStorage.getItem("enter") === "true") {
            window.localStorage.setItem("enter", false);
            alert("성공적으로 퇴실되었습니다.'");
            await deleteData(user.uid);
        }else {
            alert("아직 입실중이 아닙니다.")
        }
        setRender(!render)
        
    }
    

    return(
        <>
            <StyledContainer>
                <StyledLeaveButton onClick={handleClick}>
                    퇴실하기
                </StyledLeaveButton>
            </StyledContainer>
        </>
    )
}

