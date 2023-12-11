import React from "react";
import styled from "styled-components";

export const RoomLeave = () => {
    return(
        <>
            <StyledContainer>
                <StyledLeaveButton onClick={() => {
                    if(window.localStorage.getItem("enter") === "true") {
                        window.localStorage.setItem("enter", false);
                        alert("성공적으로 퇴실되었습니다.'");
                    } else {
                        alert("아직 입실중이 아닙니다.")
                    }
                }}>
                    퇴실하기
                </StyledLeaveButton>
            </StyledContainer>
        </>
    )
}

const StyledContainer = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: flex-end;
`;
const StyledLeaveButton = styled.button`
    width: 200px;
    height: 80px;
    font-size: 38px;
    font-family: bold;
    background: #ff2233;
    border-radius: 20px;
    border: 1px solid #bbb;
    color: #fff;
    cursor: pointer;

    &:focus {
        outline: none;
    }
`;