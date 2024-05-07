import styled, { keyframes } from "styled-components";

export const Interface = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
`;
export const BoxInicio = styled.section`
  height: 100vh;
  scroll-snap-align: start;
  position: sticky;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background-color: #212121; */
  background-color: #11110b;
  color: white;
`;

export const TextoInicio = styled.div`
  height: 35vh;
  display: flex;
  align-items: center;

  h1 {
    font-size: 45px;
    margin-right: 10px;
  }
`;

const cursorAnimation = keyframes`
  0% {
    left: 0; 
  }
  100% {
    left: 100%; 
  }
`;

const typeAnimation = keyframes`
  10%, 15%, 30%, 35%, 50%, 55%, 70%, 75%, 90%, 95% {
    width: 100% - 23rem;
   }
   5%, 20%, 25%, 40%, 45%, 60%, 65%, 80%, 85% {
    width: calc(100% + 50px);
   }
`;

const wordsAnimation = keyframes`
   0%, 50% {
     content: "Michele Costa";
   }
   51%, 100% {
     content: "Front-End Developer";
   }
`;

export const AnimatedText = styled.span`
  font-size: 45px;
  font-weight: 300;
  position: relative;

  &:before {
    content: "";  
    color: yellow;
    animation: ${wordsAnimation} 10s infinite;
  }

  &:after {
    content: "";
    position: absolute;
    height: 100%;
    border-left: 2px solid yellow;
    right: 23rem;
    animation: ${cursorAnimation} 5s infinite, ${typeAnimation} 10s steps(13) infinite;
    width: calc(100% + 18px);
    background-color: #11110b;
  }
`;

export const ButtonContainer = styled.div`
margin-top: 5px;
  display: flex;
  justify-content: center;
`

export const Button = styled.button`
  height: 7vh;
  width: 10vw;

  border-radius: 3vh;
  background-color: yellow;
  margin-top: 25px;
  font-size: 15px;
  font-weight: 600;
`;

export const BoxSobre = styled.section`
  height: 100vh;
  scroll-snap-align: start;
  position: sticky;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #27271d;
  color: white;
`;

export const SobreMim = styled.div`
height: 60vh;
width: 80vw;
display: flex;
justify-content: space-between;
align-items: center;
`

const animateSobre = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const SobreTexto = styled.div`
  position: relative;
  width: 500px;
  height: 350px;
  background-color: #11110b;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  p {
    z-index: 1;
  }

  &:before {
    content: "";
    position: absolute;
    width: 100px;
    height: 200%;
    background: linear-gradient(180deg, white, yellow);
    animation: ${animateSobre} 3s linear infinite;
  }

  &:after {
    content: "";
    position: absolute;
    background-color: #11110b;
    inset: 5px;
    border-radius: inherit;
  }
`;

export const SobreImagem = styled.div`
`