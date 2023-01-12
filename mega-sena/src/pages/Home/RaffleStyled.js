import styled from "styled-components";

// Container principal
export const ContainerRaffle = styled.section`
  display: flex;
  box-sizing: border-box;
  height: 100vh;
  width: 70%;
  background-color: #efefef;
  flex-direction: column;
  border-radius: 90px 0 0 90px/50%;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;

  p {
    font-size: 0.8rem;
    font-weight: 500;
    color: #333333;

    @media (max-width: 768px) {
      width: 70%;
      flex-wrap: wrap;
      font-size: 0.8rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 60%;
    border-radius: 50%/30px 30px 0 0;
  }
`;

// Container para organizar os números sorteados
export const ContainerCircle = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 70%;

  @media (max-width: 768px) {
    width: 80%;
    flex-wrap: wrap;
    gap: 0.8rem;
  }
`;

// Números sorteados
export const Circles = styled.div`
  display: flex;
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #333333;
`;
