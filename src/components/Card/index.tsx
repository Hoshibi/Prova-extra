import React from "react";

import { BsThreeDots } from "react-icons/bs";
import { LinkContainer, Container, Brand, HeaderContainer, TypeCar, Model, BtnOptions, ImageContainer, ImageCar , FooterContainer, BtnBookNow, PriceContainer, Dollar, Price, PriceDay  } from "./styles";

interface PropsType {
    brand: string,
    model: string,
    price: number,
    imagem: string
}

const Card: React.FC<PropsType> = ({brand, model, price, imagem}) => {
    return (
        <LinkContainer >
            <Container>
                <HeaderContainer>
                    <TypeCar>
                        <Brand>{brand}</Brand>
                        <Model>{model.toUpperCase()}</Model>
                    </TypeCar>
                    <BtnOptions>
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
        </LinkContainer>
    );
}

export default Card;