import styled from "styled-components";

/**
 * @todo 입실된 사람들의 명단을 보여주는 요소들을 포함하는 container
 */
export const StyledContainer = styled.div`
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



const Styled = styled.div(({theme})=>({
    display:"flex",
    ...(theme.mode === 'dis' && {
        display:  "flex"
    }),
}))

/**
 * @todo 명단의 요소들 안에 입실된 사람들의 정보들이 기입됨
 */
export const StyledListItem = styled.div`
    width: 100%;
    min-height: 90px;
    max-height: 90px;
    background: #fff;
    border: 1px solid #bbb;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    display: flex;
    align-items: center;
    padding: 15px;
`;

/**
 * @todo 현재 입실 한 사람의 프로필 화면
 */
export const StyledImg = styled.img`
    border-radius: 50%;
    width: 70px;
    hegith: 70px;
`;