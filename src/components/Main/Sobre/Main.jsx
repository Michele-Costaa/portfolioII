import * as S from "./styles";

export default function Main() {
  return (
    <S.Interface>

      <S.BoxInicio>

        <S.TextoInicio className="txt-animado">
          <h1>Eu sou</h1>
          <S.AnimatedText></S.AnimatedText>
        </S.TextoInicio>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Nemo itaque quam, non ex,</p> */}
        <S.ButtonContainer>
          <S.Button>Download CV</S.Button>
        </S.ButtonContainer>
        
      </S.BoxInicio>
       {/* outra section */}
      <S.BoxSobre>
        
        <S.SobreMim>
            <S.SobreTexto>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Doloremque, odio aspernatur, minima dolor voluptatem ab saepe fuga reiciendis, 
                  ullam hic necessitatibus dolores. 
                  Eaque aliquid animi architecto quo aut explicabo minima.</p>
            </S.SobreTexto>

            <S.SobreImagem>
              {/* <img src="" alt="" /> */}
            </S.SobreImagem>
            
        </S.SobreMim>


      </S.BoxSobre>

    </S.Interface>
  );
}