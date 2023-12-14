import styled from "styled-components";

/**
 * @todo 퇴실 부분의 button을 포함하는 container
 */
export const StyledContainer = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
    justify-content: flex-end;
`;
/**
 * @todo Leave 부분의 button 누를시 퇴실 할 수 있음
 */
export const StyledLeaveButton = styled.button`
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