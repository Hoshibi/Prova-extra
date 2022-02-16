import React, { useCallback, useEffect, useState } from "react";
import axios from 'axios';

import Card from "@components/Card";
import { Container } from "./styles";

const CardsContainer: React.FC = () => {
    const [infoCar, getInfoCar] = useState([]);
    
    const getCar = useCallback(async () => {
        axios.get('./cars.json')
          .then(function (response) {
            getInfoCar(response.data.cars);
          })
          .catch(function (error) {
            console.log(error);
        })
    }, []);

    useEffect(() => {
        getCar();
    }, [getCar]);

    return (
        <Container>
            {infoCar.map((info,index) => {
                console.log(info)
                return <Card key={index} brand={info["brand"]} model={info["model"]} price={info["price"]} imagem={info["sideImage"]} id={info["id"]}/>
            })}
        </Container>
    );
}

export default CardsContainer;