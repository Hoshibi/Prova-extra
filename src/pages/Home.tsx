import React from "react";
import Navbar from "@components/Navbar";
import CardsContainer from "@components/CardsContainer";
import BtnFloating from "@components/BtnFloating";

function Home() {
    return(
        <>
            <CardsContainer />
            <BtnFloating />
            <Navbar />
        </>
    );
}

export default Home;