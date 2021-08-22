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
`;

const Esquerda = styled.div`
    width: 100%;
    max-width: 614px;
`;

const Sidebar = styled.div`
    width: 293px;
    padding-top: 24px;
    position: sticky;
    top: 88px;
    @media (max-width: 935px) {
      display: none;
    }
`;

const Links = styled.div`
    font-size: 11px;
    color: #C7C7C7;
    margin-top: 40px;
    cursor: pointer;
`;

const Copyright = styled.div`
    font-size: 11px;
    color: #C7C7C7;
    margin-top: 18px;
`;