import * as S from "./components/Header/styles";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Sobre/Main.jsx";

export default function App() {
  return (
    <>
      <S.GlobalStyle />
      <Header />
      <Main />
    </>
  );
}
