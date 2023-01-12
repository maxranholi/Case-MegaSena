import React, { useEffect, useState } from "react";
import { ContainerTitle, MenuDropDown, Title } from "./HeaderStyled";
import logo from "../../Assets/Logo_Sena.png"
import { Circles, ContainerCircle, ContainerRaffle } from "./RaffleStyled";
import { ContainerMain } from "./MainContainer";
import { selectGame } from "../../services/Request";

const Home = () => {
  const [changeColor, setChangeColor] = useState("#6BEFA3");
  const [data, setData] = useState({});

useEffect(() => selectGame(setData),[])


  return (
    <ContainerMain backgroundColor={changeColor}>
      {/* ====================================================================== Header Container */}
      <ContainerTitle>
        <MenuDropDown onChange={(event) => setChangeColor(event.target.value)}>
          <option value={"#6BEFA3"}>MEGA-SENA</option>
          <option value={"#8666EF"}>QUINA</option>
          <option value={"#DD7AC6"}>LOTOFACIL</option>
          <option value={"#FFAB64"}>LOTOMANIA</option>
          <option value={"#5AAD7D"}>TIMEMANIA</option>
          <option value={"#BFAF83"}>DIA DE SORTE</option>

        </MenuDropDown>
        <Title>
          <img src={logo} alt="Logo da caixa lotérica" />
          <h1>MEGA-SENA</h1>
          {data.arrecadacao_total}
        </Title>
        <h4>Maximiliano</h4>
      </ContainerTitle>
      {/* ====================================================================== Raffle Container */}
      <ContainerRaffle>
        <div></div>
        <ContainerCircle>
          <Circles>01</Circles>
          <Circles>02</Circles>
          <Circles>03</Circles>
          <Circles>04</Circles>
          <Circles>05</Circles>
          <Circles>06</Circles>
        </ContainerCircle>
        <p>
          Este sorteio é meramente ilustrativo e não possui ligação com a CAIXA.
        </p>
      </ContainerRaffle>
    </ContainerMain>
  );
};

export default Home;
