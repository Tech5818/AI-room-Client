import React, { useState } from "react";
import styled from "styled-components";
import { addData } from "../apis/Room/addPeople";
import { useStateContext } from "../Context";

export const RoomEnter = () => {
    const {user} = useStateContext();
    const [enterH, setEnterH] = useState("");
    const [enterM, setEnterM] = useState("");
    const [leaveH, setLeaveH] = useState("");
    const [leaveM, setLeaveM] = useState("");

    return(
        <>
            <StyledContainer>
                <StyledBox>
                    <StyledEnter>
                        <StyledTitle>입실시간 [</StyledTitle>
                        <StyledInput 
                            type="number"
                            placeholder="시"
                            value={enterH}
                            onChange={(e) => {
                                if (e.target.value > 12){
                                    alert("시간은 12시를 넘을 수 없습니다.")
                                    return
                                }
                                setEnterH(e.target.value)
                            }}
                        />
                        <StyledTitle>:</StyledTitle>
                        <StyledInput
                            type="number"
                            placeholder="분"
                            value={enterM}
                            onChange={(e) => {
                                if (e.target.value > 60){
                                    alert("분은 60분을 넘을 수 없습니다.")
                                    return
                                }
                                setEnterM(e.target.value)
                            }}
                        />
                        <StyledTitle>]</StyledTitle>
                    </StyledEnter>
                    <StyledLeave>
                    <StyledTitle>퇴실시간 [</StyledTitle>
                        <StyledInput 
                            type="number"
                            placeholder="시"
                            value={leaveH}
                            onChange={(e) => {
                                if (e.target.value > 12){
                                    e.target.value = "";
                                    alert("시간은 12시를 넘을 수 없습니다.")
                                    return
                                }
                                setLeaveH(e.target.value)
                            }}
                        />
                        <StyledTitle>:</StyledTitle>
                        <StyledInput
                            type="number"
                            placeholder="분"
                            value={leaveM}
                            onChange={(e) => {
                                if (e.target.value > 60){
                                    alert("분은 60분을 넘을 수 없습니다.")
                                    return
                                }
                                setLeaveM(e.target.value)
                            }}
                        />
                        <StyledTitle>]</StyledTitle>
                    </StyledLeave>
                    <StyledEnterButton onClick={async () => {
                        if (window.localStorage.getItem("enter") !== "true"){
                            const data = {
                                user: user,
                                time: {
                                    enter: [parseInt(enterH) + 12, enterM],
                                    leave: [parseInt(leaveH) + 12, leaveM]
                                },
                            }
                            window.localStorage.setItem("enter", true);
                            await addData(data);
                            alert("입실되었습니다.");
                        } else {
                            alert("이미 입실중 입니다.")
                        }
                        setEnterH("");
                        setEnterM("");
                        setLeaveH("");
                        setLeaveM("");
                    }}>입실</StyledEnterButton>
                </StyledBox>
                <StyledText>시간은 자동으로 오후 기준입니다.</StyledText>
            </StyledContainer>
        </>
    )
}

const StyledContainer = styled.div`
`;
const StyledBox = styled.div`
    width: 100%;
    height: 120px;
    background: #fff;
    border-radius: 30px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 0.5px solid #bbb;
`;
const StyledEnter = styled.div`

`
const StyledLeave = styled.div`

`
const StyledTitle = styled.span`
    font-size: 38px;
`
const StyledInput = styled.input`
    width: 55px;
    height: 38px;
    font-size: 38px;
    border: none;
    background: transparent;
    text-align: center;

    &:focus {
        outline: none;
    }
    &::-webkit-inner-spin-button {
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;
    }
`;
const StyledEnterButton = styled.button`
    width: 160px;
    height: 80px;
    font-size: 38px;
    background: #00ff44;
    border: 1px solid #bbb;
    border-radius: 20px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    font-family: bold;

    &:focus {
        outline: none;
    }
`;
const StyledText = styled.p`
    padding: 10px 30px;
    font-family: bold;
    color: #888;
    font-size: 22px;
`