import React from "react";

import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Container, Brand, HeaderContainer, TypeCar, Model, BtnOptions, ImageContainer, ImageCar , FooterContainer, BtnBookNow, PriceContainer, Dollar, Price, PriceDay  } from "./styles";

interface PropsType {
    brand: string,
    model: string,
    price: number,
    imagem: string,
    id: number
}

const Card: React.FC<PropsType> = ({brand, model, price, imagem, id}) => {
    const navigate = useNavigate();
    
    return (
            <Container onClick={() => {navigate(`/detail/${id}`)}}>
                <HeaderContainer>
                    <TypeCar>
                        <Brand>{brand}</Brand>
                        <Model>{model.toUpperCase()}</Model>
                    </TypeCar>
                    <BtnOptions onClick={
                        (event) => {
                            alert("Clickou no Options");
                            event.stopPropagation();
                        }
                    }>
                        <BsThreeDots className="btnDots"/>
                    </BtnOptions>
                </HeaderContainer>
                <ImageContainer>
                    <ImageCar src={imagem}/>
                </ImageContainer>
                <FooterContainer>
                    <BtnBookNow className="bookNow">Book Now</BtnBookNow>
                    <PriceContainer>
                        <Dollar>$</Dollar>
                        <Price>{price}</Price>
                        <PriceDay>/day</PriceDay>
                    </PriceContainer>
                </FooterContainer>
            </Container>
    );
}

export default Card;