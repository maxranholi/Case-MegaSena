import styled from "styled-components";


// Container principal que engloba as seções
export const ContainerMain = styled.div`
display: flex;
width: 100%;
height: 100vh;
/* background-color: #6BEFA3; */
box-sizing: border-box;
background-color: ${(props) => props.backgroundColor};

@media (max-width: 768px) {
    display: flex;
    flex-direction: column;
}
`
export const Quina = styled.div`
background-color: #8666EF;
`
export const LotoFacil = styled.div`
background-color: #DD7AC6;
`