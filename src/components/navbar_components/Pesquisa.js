import styled from 'styled-components';

export default function Pesquisa() {
    return (
        <BarraDePesquisa>
            <input type="text" placeholder="Pesquisar" />
        </BarraDePesquisa>
    )
}

const BarraDePesquisa = styled.div`
    box-sizing: border-box;
    input {
        width: 210px;
        height: 24px;
        border-radius: 3px;
        background-color: #FAFAFA;
        border: 1px solid #DBDBDB;
        color: #979797;
        text-align: center;
    }
    @media (max-width: 614px) {
        display: none !important;
    }
`;