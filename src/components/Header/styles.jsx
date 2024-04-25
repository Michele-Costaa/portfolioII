import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    text-decoration: none;
    list-style: none;
}
`;

export const NavbarWrapper = styled.div`
  background: #ff8d01;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin: 15px;
  color: white;
`;

export const NavItems = styled.div`
  display: flex;
  @media (max-width: 768px) {
    position: absolute;
    top: 60px;
    left: 0;
    background: rgb(255, 128, 0);
    display: flex;
    flex-direction: column;
    width: 100%;
    height: -webkit-fill-available;
    transform: translateX(-100%);
    transition: 0.3s ease all;

    ${(props) =>
      props.isOpen &&
      `
        transform: translateX(0) !important;
      `}
  }
`;

export const NavItem = styled.a`
  margin: 15px;
  color: white;
  position: relative;
  text-decoration: none;
`;

export const Toggle = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 15px;
  }
`;

export const ToggleSpan = styled.span`
  width: 30px;
  height: 4px;
  background: white;
  margin-bottom: 5px;
  border-radius: 2px;
  transform-origin: 5px 0px;
  transition: all 0.2s linear;
  ${(props) =>
    props.isOpen &&
    `
    transform: rotate(45deg) translate(0px, 0px);
    &:nth-child(2) {
      display: none;
    }
    &:nth-child(3) {
      transform: rotate(-45deg) translate(-5px, 1px);
    }
  `}
`;