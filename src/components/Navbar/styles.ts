import styled from 'styled-components';

export const Container = styled.div `
    background-color: #fff;
    box-shadow: 0px 10px 30px #0000001A;
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    font-family: "Segoe UI";

    position: fixed;
    left: 0;
    top: 0;
`;

export const TitleContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: end;
    color: #313136;
`;

export const BigTitle = styled.h1 `
    font-weight: 600;
    font-size: 24px;
`;

export const SmallTitle = styled.h1 `
    font-weight: 400;
    margin-left: 5px;
    font-size: 16px;
`;

export const SearchContainer = styled.div `
    display: flex;
    flex-direction: row;
    background-color: #F3F1FC;
    display: flex;
    align-items: center;
    padding-left: 27px;
    height: 36px;
    border-radius: 18px;
`;

export const LocateInputContainer = styled.div `
    display: flex;
    flex-direction: row;
    margin-right: 5px;
    align-items: center;
    justify-content: center;

    & svg {
        fill: #c4c4c4;
    }
`;

export const LocateInput = styled.input `
    height: 18px;
    width: 195px;
    border-width: 0px;
    background-color: transparent;
    font-family: "Segoe UI";
    font-size: 12px;
    color: #656469;
    font-weight: 600;
    padding-left: 5px;
    padding-right: 5px;
    margin-right: 5px;

    &:focus {
        outline: 0;
        border-bottom: 1px solid;
        border-color: #c4c4c4;
    }
`;

export const DateInputContainer = styled.div `
    display: flex;
    flex-direction: row;
    margin-right: 5px;
    align-items: center;
    justify-content: center;

    & svg {
        height: 20px;
        width: 20px;
        fill: #c4c4c4;
        margin-right: 5px;
    }
`;

export const DateInput = styled.input `
    height: 18px;
    width: 5rem;
    padding-right: 5px;
    border-width: 0px;
    background-color: transparent;
    font-family: "Segoe UI";
    color: #656469;
    font-size: 12px;
    font-weight: 600;

    &::-webkit-calendar-picker-indicator{
        display: none;
    }

    &:focus {
        outline: 0;
        border-bottom: 1px solid;
        border-color: #c4c4c4;
    }
`;

export const BtnSearch = styled.button `
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 15px;
    border: 1px solid #FFFFFF;
    box-shadow: 0px 3px 15px #00000014;
    margin-left: 25px;
    margin-right: 3px;

    & svg {
        fill: #7B89F4;
    }

    &:hover {
        opacity: 0.7;
    }
    }
`;

export const BtnAuthContainer = styled.div `
    display: flex;
    flex-direction: row;
`;

export const BtnSignUp = styled.button `
    font-family: "Segoe UI";
    font-weight: bold;
    color: #7B89F4;
    border-width: 0;
    background-color: transparent;
    margin-right: 28px;

    &:hover {
        opacity: 0.6;
    }
`;

export const BtnSignIn = styled.button `
    font-family: "Segoe UI";
    font-weight: bold;
    color: #7B89F4;
    border: 2px solid #7B89F4;
    background-color: transparent;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 10px;
    padding-right: 12px;
    border-radius: 12px;

    &:hover {
        opacity: 0.6;
    }
`;