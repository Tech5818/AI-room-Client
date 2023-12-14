import React, { useState } from "react";
import { addData } from "../apis/Room/addPeople";
import { useStateContext } from "../Context";
import { StyledContainer, StyledBox, StyledEnter, StyledTitle, StyledInput, StyledLeave, StyledEnterButton, StyledText } from "./style/content/main/enter/Enter.style"

/**
 * 
 * @returns 입실 시간 및 퇴실 시간, 입실 button을 포함하는 element
 */
export const RoomEnter = () => {
    const {user,render, setRender} = useStateContext();
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
                            setRender(!render);
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

