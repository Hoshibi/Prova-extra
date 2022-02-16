// import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkContainer = styled.button `
    margin-right: 25px;
    margin-bottom: 32px;
    border-width: 0px;
    border-radius: 30px;
    background-color: transparent;
    width: 269px;
`;

export const Container = styled.div `
    height: 196px;
    padding: 23px 17px 0px 17px;
    background-color: #F8F8FA;
    border-radius: 20px;
    font-family: 'Segoe UI';

    &:hover {
        background: linear-gradient(70deg, #ADADED, #D7C9F1);
        
        .bookNow {
            color: #fff;
        }

        .btnDots {
            color: #656469;
        }
    }
`;

export const HeaderContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: start;
`;

export const TypeCar = styled.div `
    display: flex;
    flex-direction: column; 
    align-items: start;
`;

export const Brand = styled.h1 `
    font-size: 17px;
    font-weight: bold;
`;

export const Model = styled.p `
    font-size: 17px;
    font-weight: 300;
`;

export const BtnOptions = styled.button `
    background-color: transparent;
    border-width: 0px;

    &:hover {
        opacity: 0.6;
    }

    & svg {
        font-size: 28px;
        color: #C8C8CA;
        opacity: 64%;
    }
`;

export const ImageContainer = styled.div `
    margin-top: 10px;
    margin-bottom: 10px;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ImageCar = styled.img `
    height: 100%;
    width: 90%;
`;

export const FooterContainer = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: end;
`;

export const BtnBookNow = styled.p `
    font-weight: 600;
    color: #F8F8FA;
    font-size: 16px;
    opacity: 0.9;
`;

export const PriceContainer = styled.div `
    display: flex;
    flex-direction: row;
    height: 30px;
`;

export const Dollar = styled.p `
    display: flex;
    align-self: start;
    font-size: 14px;
    font-weight: bold;
`;

export const Price = styled.p `
    display: flex;
    align-self: center;
    font-size: 24px;
    font-weight: bold;
`;

export const PriceDay = styled.p `
    display: flex;
    align-self: end;
    font-size: 14px;
    font-weight: 400;
`;