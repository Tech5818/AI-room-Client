import styled from "styled-components";

/**
 * @todo 입실 시간 및 퇴실 시간 등을 기입하고 입실을 할 수 있는 container
 */
export const StyledContainer = styled.div`
`;

/**
 * @todo 입실 시간 및 퇴실 시간 입실 button을 감싸는 element
 */
export const StyledBox = styled.div`
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

/**
 * @todo 입실 시간을 기입하는 부분을 감싸는 element
 */
export const StyledEnter = styled.div`

`

/**
 * @todo 퇴실 시간을 기입하는 부분을 감싸는 element
 */
export const StyledLeave = styled.div`

`

/**
 * @todo 각 시간에 대한 설명을 적는 span element
 */
export const StyledTitle = styled.span`
    font-size: 38px;
`

/**
 * @todo 입실 시간 및 퇴실 시간을 입력(input) 받아 올 수 있는 input element
 */
export const StyledInput = styled.input`
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

/**
 * @todo 입실 버튼
 */
export const StyledEnterButton = styled.button`
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

/**
 * @todo 입실시 설명을 적는 p element
 */
export const StyledText = styled.p`
    padding: 10px 30px;
    font-family: bold;
    color: #888;
    font-size: 22px;
`