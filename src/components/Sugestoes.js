import styled from "styled-components";

import UsuarioSugerido from "./sidebar_components/UsuarioSugerido";

import celeste from './assets/imgs/celeste2.jpg';
import stardewValley from './assets/imgs/stardew-valley.jpg';
import limbo from './assets/imgs/limbo-game.png';
import wizardOfLegend from './assets/imgs/wizard-of-legend.webp';
import zulf from './assets/imgs/zulf.png';

export default function Sugestoes() {
    const usuariosSugeridos = [
        { nickname: "celeste", imgPath: celeste, followingState: true },
        { nickname: "stardew-valley", imgPath: stardewValley, followingState: true },
        { nickname: "limbo", imgPath: limbo, followingState: false },
        { nickname: "wizard-of-legend", imgPath: wizardOfLegend, followingState: true },
        { nickname: "zulf", imgPath: zulf, followingState: false }
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
