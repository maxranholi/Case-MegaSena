import styled from "styled-components";

// Container Principal
export const ContainerTitle = styled.header`
  display: flex;
  height: 100vh;
  width: 30%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 3rem;

  @media (max-width: 768px) {
    width: 100%;
    height: 40%;
    gap: 1rem;
    padding-top: 1rem;
  }
  
`;

//Menu Dropdown
export const MenuDropDown = styled.select`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: #333333;
  border: none;
  display: flex;
  height: 2.5rem;
  padding: 10px;
  border-radius: 4px;
  filter: drop-shadow(0px 3px 8px rgba(0, 0, 0, 0.031));
  margin-right: 3rem;
  background-color: ${(props) => props.backgroundColor};

  @media (max-width: 768px) {
    margin-right: 0;
    width: 40%;
  }
`;

// Título e Logo
export const Title = styled.div`
  display: flex;
  font-size: 0.7rem;
  color: blue;
  align-items: center;
  justify-content: space-evenly;
  color: #ffffff;
  width: 40%;

  img {
    height: 2rem;
    width: 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const DataStyled = styled.div`
display: flex;
color: #ffffff;
    font-size: 1rem;
    @media (max-width: 768px) {
      font-size: 1rem;
    }
`
