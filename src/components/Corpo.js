import styled from 'styled-components';

import Stories from "./Stories";
import Posts from "./Posts";
import UsuarioLogado from "./sidebar_components/UsuarioLogado";
import Sugestoes from "./Sugestoes";

import catanacomicsImg from './assets/img/catanacomics.svg';

export default function Corpo() {
  const usuarioLogado = {
    nickname: "catanacomics", username: "Catana", imgPath: catanacomicsImg
  }
    return (
        <CorpoBox>
          <Esquerda>
            <Stories />
            <Posts />
          </Esquerda>

          <Sidebar>
            <UsuarioLogado 
            nickname={usuarioLogado.nickname} 
            username={usuarioLogado.username} 
            imgPath={usuarioLogado.imgPath} 
            />
            <Sugestoes />
            <Links>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</Links>
            <Copyright>© 2021 INSTAGRAM DO FACEBOOK</Copyright>
          </Sidebar>
        </CorpoBox>
    )
}

const CorpoBox = styled.div`
    display: flex;
    justify-content: space-between;
    width: 935px;
    margin: 0 auto;
    margin-top: 88px;
    box-sizing: border-box;
    @media (max-width: 935px) {
        justify-content: center;
        width: 100%;
    }
    @media (max-width: 614px) {
        margin-top: 0;
    }
`;

const Esquerda = styled.div`
    width: 100%;
    max-width: 614px;
    box-sizing: border-box;
`;

const Sidebar = styled.div`
    width: 293px;
    padding-top: 24px;
    position: sticky;
    top: 88px;
    box-sizing: border-box;
    @media (max-width: 935px) {
      display: none;
    }
`;

const Links = styled.div`
    font-size: 11px;
    color: #C7C7C7;
    margin-top: 40px;
    cursor: pointer;
    box-sizing: border-box;
`;

const Copyright = styled.div`
    font-size: 11px;
    color: #C7C7C7;
    margin-top: 18px;
    box-sizing: border-box;
`;