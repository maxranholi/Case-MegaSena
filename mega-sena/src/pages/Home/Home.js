import React, { useEffect, useState } from "react";
import {
  ContainerTitle,
  DataStyled,
  MenuDropDown,
  Title,
} from "./HeaderStyled";
import logo from "../../Assets/Logo_Sena.png";
import { Circles, ContainerCircle, ContainerRaffle } from "./RaffleStyled";
import { ContainerMain } from "./MainContainer";
import { selectGame } from "../../services/Request";

const Home = () => {
  const [changeColor, setChangeColor] = useState("#6BEFA3");
  const [prize, setPrize] = useState("megasena")
  const [numbers, setNumbers] = useState([]);
  const [data, setData] = useState({});
  const [name, setName] = useState("");
  const [gameNumber, setGameNumber] = useState("");

  useEffect(() => selectGame(setData, setNumbers, setName, setGameNumber, prize), [prize]);

  let dataConcurso = data.data_concurso;

  const setPrizeandColor = (y,z) => {
    setChangeColor(y)
    setPrize(z)
  }

  if (dataConcurso) {
    dataConcurso = dataConcurso
      .slice(0, 10)
      .split("-")
      .reverse()
      .join()
      .replace(/,/g, "/");
  }

  let numbersMap = numbers.map((number , index) => {
    return <Circles key={index}>{number}</Circles>;
  });

  return (
    <ContainerMain backgroundColor={changeColor}>
      {/* ====================================================================== Header Container */}
      <ContainerTitle>
        <MenuDropDown onChange={(event) => setPrizeandColor(event.target.value.slice(0,7), event.target.value.slice(7))}>
          <option value={"#6BEFA3megasena"}>MEGA-SENA</option>
          <option value={"#8666EFquina"}>QUINA</option>
          <option value={"#DD7AC6lotofacil"}>LOTOFACIL</option>
          <option value={"#FFAB64lotomania"}>LOTOMANIA</option>
          <option value={"#5AAD7Dtimemania"}>TIMEMANIA</option>
          <option value={"#BFAF83diadesorte"}>DIA DE SORTE</option>
        </MenuDropDown>
        <Title>
          <img src={logo} alt="Logo da caixa lotérica" />
          <h1>{name}</h1>
        </Title>
        <DataStyled>
          {data.numero_concurso} {dataConcurso}
        </DataStyled>
      </ContainerTitle>
      {/* ====================================================================== Raffle Container */}
      <ContainerRaffle>
        <div></div>
        <ContainerCircle>{numbersMap}</ContainerCircle>
        <p>
          Este sorteio é meramente ilustrativo e não possui ligação com a CAIXA.
        </p>
      </ContainerRaffle>
    </ContainerMain>
  );
};

export default Home;
