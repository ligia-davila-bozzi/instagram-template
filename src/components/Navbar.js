import styled from 'styled-components';

import Logo from "./navbar_components/Logo.js";
import Pesquisa from "./navbar_components/Pesquisa.js";
import Icones from "./navbar_components/Icones.js";

export default function Navbar() {
    return (
        <Bar>
            <Container>
                <Logo />
                <Pesquisa />
                <Icones />
            </Container>
        </Bar>
    )
}

const Bar = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 54px;
    border-bottom: 1px solid #DBDBDB;
    font-size: 22px;
    background-color: #FFF;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    ion-icon, img {
        cursor: pointer;
    }
`;

const Container = styled.div`
    width: 100%;
    max-width: 935px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    > * {
        display: flex;
        align-items: center;
        height: 100%;
    }
    @media (max-width: 935px) {
        padding: 0 20px;
    }
`;