import styled from 'styled-components';

export default function Icones() {
    return (
        <>
        <IconesDesktop>
            <ion-icon name="paper-plane-outline"></ion-icon>
            <ion-icon name="compass-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </IconesDesktop>

        <IconesMobile>
            <ion-icon name="paper-plane-outline"></ion-icon>
        </IconesMobile>
        </>
    )
}

const IconesDesktop = styled.div`
    margin: 0 5px;
    @media (max-width: 614px) {
        display: none;
    }
`;

const IconesMobile = styled.div`
    display: none !important;
    @media (max-width: 614px) {
        display: flex !important;
    }
`;