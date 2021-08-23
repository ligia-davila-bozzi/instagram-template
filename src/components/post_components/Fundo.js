import styled from 'styled-components';

export default function PostFundo(props) {
    const { curtidaImg } = props;
    return (
        <Fundo>
            <div className="acoes">
                <div>
                    <ion-icon name="heart-outline"></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div><ion-icon name="bookmark-outline"></ion-icon></div>
            </div>
            <Curtidas>
                <img alt="" src={curtidaImg} />
                <div className="texto">Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong></div>
            </Curtidas>
        </Fundo>
    )
}

const Fundo = styled.div`
    box-sizing: border-box;
    img {
        cursor: pointer;
    }
    .acoes {
        display: flex;
        justify-content: space-between;
        padding: 13px 16px;
        font-size: 24px;
        div:first-child {
            ion-icon {
                margin-right: 6px;
            }
        }
    }
`;

const Curtidas = styled.div`
    display: flex;
    align-items: center;
    padding: 0 16px 13px;
    font-weight: 300;
    box-sizing: border-box;
    img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }
`;