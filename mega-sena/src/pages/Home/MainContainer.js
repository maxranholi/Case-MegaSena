import styled from "styled-components";


// Container principal que engloba as seções
export const ContainerMain = styled.div`
display: flex;
width: 100%;
height: 100vh;
box-sizing: border-box;
background-color: ${(props) => props.backgroundColor};

@media (max-width: 768px) {
    display: flex;
    flex-direction: column;
}
`
