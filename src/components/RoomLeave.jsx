import React from "react";
import { StyledContainer, StyledLeaveButton } from "./style/content/main/leave/Leave.style";

/**
 * 
 * @returns 퇴실 버튼을 포함하는 element
 */
export const RoomLeave = () => {
    return(
        <>
            <StyledContainer>
                <StyledLeaveButton onClick={() => {
                    if(window.localStorage.getItem("enter") === "true") {
                        window.localStorage.setItem("enter", false);
                        alert("성공적으로 퇴실되었습니다.'");
                        return
                    }
                    alert("아직 입실중이 아닙니다.")
                }}>
                    퇴실하기
                </StyledLeaveButton>
            </StyledContainer>
        </>
    )
}

