import styled from 'styled-components';

import logo from "../assets/img/logo.png";

export default function Logo() {
    return (
        <>
        <LogoDesktop>
            <ion-icon name="logo-instagram"></ion-icon>
            <div className="separador"></div>
            <img alt="" src={logo} />
        </LogoDesktop>

        <LogoMobile>
            <ion-icon name="logo-instagram"></ion-icon>
        </LogoMobile>

        <InstagramMobile>
            <img alt="" src={logo} />
        </InstagramMobile>
        </>
    )
}

const LogoDesktop = styled.div`
    box-sizing: border-box;
    img {
        position: relative;
        top: 3px;
    }
    .separador {
        width: 1px;
        height: 22px;
        background-color: #DBDBDB;
        margin: 0 10px;
    }
    @media (max-width: 614px) {
        display: none !important;
    }
`;

const LogoMobile = styled.div`
    display: none !important;
    box-sizing: border-box;
    @media (max-width: 614px) {
        display: flex !important;
    }
`;

const InstagramMobile = styled.div`
    display: none !important;
    box-sizing: border-box;
    @media (max-width: 614px) {
        display: flex !important;
        position: relative;
        top: 4px;
    }
`;