import styled from "styled-components";

import UsuarioSugerido from "./sidebar_components/UsuarioSugerido";

import badVibesMemesImg from './assets/img/bad.vibes.memes.svg';
import chibirdartImg from './assets/img/chibirdart.svg';
import razoesParaAcreditarImg from './assets/img/razoesparaacreditar.svg';
import adorableAnimalsImg from './assets/img/adorable_animals.svg';
import smallCuteCatsImg from './assets/img/smallcutecats.svg';

export default function Sugestoes() {
    const usuariosSugeridos = [
        { nickname: "bad.vibes.memes", imgPath: badVibesMemesImg, followingState: true },
        { nickname: "chibirdart", imgPath: chibirdartImg, followingState: true },
        { nickname: "razoesparaacreditar", imgPath: razoesParaAcreditarImg, followingState: false },
        { nickname: "adorable_animals", imgPath: adorableAnimalsImg, followingState: true },
        { nickname: "smallcutecats", imgPath: smallCuteCatsImg, followingState: true }
    ]
    return (
        <SugestoesBox>
            <Titulo>
                Sugestões para você
                <div>Ver tudo</div>
            </Titulo>

            {usuariosSugeridos.map((u, index) => (
                <Sugestao key={index}>
                  <UsuarioSugerido 
                    nickname={u.nickname} 
                    imgPath={u.imgPath}
                    followingState={u.followingState} />
                  <div className="seguir">Seguir</div>
                </Sugestao>
            ))}
        </SugestoesBox>
    )
}

const SugestoesBox = styled.div`
    box-sizing: border-box;
    img {
        width: 32px;
        height: 32px;
    }
    .seguir {
        color: #139EF2;
        font-weight: 600;
    }
`;

const Titulo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0 14px;
    box-sizing: border-box;
`;

const Sugestao = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    height: 31px;
    margin-bottom: 16px;
    box-sizing: border-box;
`;
