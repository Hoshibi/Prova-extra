import React, { useEffect} from "react";

import Card from "@components/Card";
import { Container } from "./styles";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { getInfoCars } from '@store/cars-actions';

const CardsContainer: React.FC = () => {
    const dispatch = useDispatch();
    const infoCars = useSelector((state: RootStateOrAny) => state.cars.infoCars);
    
    useEffect(() => {
        dispatch(getInfoCars());
    }, [dispatch]);

    return (
        <Container>
            {infoCars.map((info:any,index:number) => {
                return <Card key={index} brand={info["brand"]} model={info["model"]} price={info["price"]} imagem={info["sideImage"]} id={info["id"]}/>
            })}
        </Container>
    );
}

export default CardsContainer;