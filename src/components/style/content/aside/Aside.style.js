import styled from "styled-components";

/**
 * @todo Aside 전체를 감싸는 aside element
 */
export const StyledAside = styled.aside`
    width: 300px;
    height: 100%;
    box-shadow: 2px 0 2px rgba(0, 0, 0, 0.2);
    padding: 20px 40px;
`;

/**
 * @todo 로그인이 되어 있지 않을때 보여지는 element
 */
export const StyledNotLoginView = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
`;

/**
 * @todo 로그인 버튼을 감싸는 element
 */
export const StyledLoginSection = styled.div`
    position: absolute;
    transform-origin: center;
    background: transparent;
    width: 100%;
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
`;

/**
 * @todo 로그인시 데이터를 불러오는 동안 보여지는 loading창
 */
export const StyledLoading = styled.div`
    font-size: 32px;
    font-family: bold;
`;

export const StyledLoginView = styled.div``;

export const StyledText = styled.p`
    font-size: 22px;
    font-family: bold;
    text-align: center;
`;

export const StyledContainer = styled.div`
    width: 100%;
    height: calc(100vh - 90px - 40px);
    display: flex;
    flex-flow: column;
    align-items: center;
`;

export const StyledAsideTitle = styled.p`
    font-size: 32px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 25px;
    font-family: bold;
`;

export const StyledAsideTextSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-self: flex-start;
    width: 100%;
`;

export const StyledAsideText = styled.p`
    font-size: 22px;

`;

export const StyledImg = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    align-self: center;
`;

export const StyledLoginButton = styled.button`
    width: 200px;
    height: 70px;
    background: #0066ff;
    border: 1px solid #aaa;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 24px;
    font-weight: bold;
    cursor: pointer;
    transition: .13s;
    &:hover {
        background: #0033dd;
    }
`;

export const StyledLogOutButton = styled.button`
    width: 100%;
    height: 65px;
    font-size: 22px;
    transition: .1s;
    outline: none;
    border: 1px solid #bbb;
    border-radius: 20px;
    margin-top: 10px;
    background: #ddd;
    font-family: bold;
    ${({$isLogin})=>($isLogin ? (`
    cursor: pointer;
    &:hover {
        background: #ff0000;
        color: #fff;
    }`) : ``
    )}
`;