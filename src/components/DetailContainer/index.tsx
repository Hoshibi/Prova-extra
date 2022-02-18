import React, { useState } from "react";

import { 
    Container, 
    DetailContainer, 
    BrandLogo, 
    TextContainer, 
    TitleContainer, 
    Brand, 
    Model, 
    Price, 
    CenterContainer, 
    BtnBack, 
    CarContainer, 
    CarImage, 
    TypeCar, 
    Number, 
    Color, 
    BtnBookNowContainer, 
    BtnBookNow,
    CarrosselContainer,
    BtnArrowLeft, 
    BtnArrowRight, 
    Carrossel, 
    AreaContainer,
    GrayArea,
    PurpleArea
} from "./styles";

import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
import { useLocation, useNavigate } from "react-router-dom";
import { RootStateOrAny, useSelector } from "react-redux";

const DetailComponent: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const infoCars = useSelector((state: RootStateOrAny) => state.cars.infoCars);

    const id = parseInt(location.pathname.replace(/[/]detail[/]/, ''));
    const info = infoCars.find((item:any) =>  item["id"] === id )
    const numCar = info.types;

    const [numLeft, setNumLeft] = useState(numCar.length-1);
    const [numCenter, setNumCenter] = useState(0);
    const [numRight, setNumRight] = useState(1);

    const returnToHome = () => {
        navigate('/');
    };

    function btnRightHandler() {
        numLeft === 0 ? setNumLeft(numCar.length-1) : setNumLeft(numLeft-1);
        numCenter === 0 ? setNumCenter(numCar.length-1) : setNumCenter(numCenter-1);
        numRight === 0 ? setNumRight(numCar.length-1) : setNumRight(numRight-1);
    }

    function btnLeftHandler() {
        numLeft === (numCar.length-1) ? setNumLeft(0) : setNumLeft(numLeft+1);
        numCenter === (numCar.length-1) ? setNumCenter(0) : setNumCenter(numCenter+1);
        numRight === (numCar.length-1) ? setNumRight(0) : setNumRight(numRight+1);
    }

    return (
        <>
        <Container>
            <DetailContainer>
                <BrandLogo src={info.logo} />
                <TextContainer>
                    <TitleContainer>
                        <Brand>{info.brand}</Brand>
                        <Model>{info.model}</Model>
                    </TitleContainer>
                    <Price>${info.price}/day</Price>
                </TextContainer>
            </DetailContainer>
            <CenterContainer>
                <BtnBack onClick={returnToHome}><VscArrowLeft />Back to calatog</BtnBack>
                <CarContainer>
                    <CarImage src={numCar[numCenter].imgCar}/>
                    <TypeCar>
                        { numCar[numCenter].index < 10 && <Number>{"0"+numCar[numCenter].index}</Number> }
                        { numCar[numCenter].index >= 10 && <Number>{numCar[numCenter].index}</Number> }
                        <Color>{numCar[numCenter].color}</Color>
                    </TypeCar>
                </CarContainer>
            </CenterContainer>
            <BtnBookNowContainer><BtnBookNow>Book Now<VscArrowRight /></BtnBookNow></BtnBookNowContainer>
            <CarrosselContainer >
                <BtnArrowLeft onClick={btnRightHandler}><VscArrowLeft /></BtnArrowLeft>
                <Carrossel>
                    { numCar.length > 2 && <AreaContainer onClick={btnRightHandler}><GrayArea><img src={numCar[numLeft].imgCar} alt="02"/></GrayArea></AreaContainer>}
                    <PurpleArea><img src={numCar[numCenter].imgCar} alt="01"/></PurpleArea>
                    { numCar.length > 1 && <AreaContainer onClick={btnLeftHandler}><GrayArea><img src={numCar[numRight].imgCar} alt="03"/></GrayArea></AreaContainer>}
                </Carrossel>
                <BtnArrowRight onClick={btnLeftHandler}><VscArrowRight /></BtnArrowRight>
            </CarrosselContainer> 
        </Container>
        </>
    );
}

export default DetailComponent;