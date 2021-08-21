import styled from 'styled-components';

export default function Logo() {
    return (
        <>
        <LogoDesktop>
            <ion-icon name="logo-instagram"></ion-icon>
            <div className="separador"></div>
            <img alt="" src="assets/img/logo.png" />
        </LogoDesktop>

        <LogoMobile>
            <ion-icon name="logo-instagram"></ion-icon>
        </LogoMobile>

        <InstagramMobile>
            <img alt="" src="assets/img/logo.png" />
        </InstagramMobile>
        </>
    )
}

const LogoDesktop = styled.div`
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
        display: none;
    }
`;

const LogoMobile = styled.div`
    display: none !important;
    @media (max-width: 614px) {
        display: flex !important;
    }
`;

const InstagramMobile = styled.div`
    display: none !important;
    @media (max-width: 614px) {
        display: flex !important;
        position: relative;
        top: 4px;
    }
`;