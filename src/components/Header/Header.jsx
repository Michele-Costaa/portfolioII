import * as S from "../Header/styles";
import { useState } from "react";

export default function Header() {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <S.NavbarWrapper>
    <S.Logo>LOGO MICHELE</S.Logo>
      <S.NavItems isOpen={isOpen}>
        <S.NavItem href="#">INICIO</S.NavItem>
        <S.NavItem href="#">SOBRE MIM</S.NavItem>
        <S.NavItem href="#">PROJETOS</S.NavItem>
        <span></span>
      </S.NavItems>

      <S.Toggle onClick={() => setIsOpen(!isOpen)}>
        <S.ToggleSpan isOpen={isOpen}></S.ToggleSpan>
        <S.ToggleSpan isOpen={isOpen}></S.ToggleSpan>
        <S.ToggleSpan isOpen={isOpen}></S.ToggleSpan>
      </S.Toggle>
    </S.NavbarWrapper>
  );
}
