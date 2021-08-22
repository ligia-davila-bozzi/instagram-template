import styled from "styled-components";

export default function UsuarioSugerido(props) {
    const { nickname, imgPath, followingState} = props;
    return (
        <UsuarioBox>
            <img alt="" src={imgPath} />
            <Texto>
                <div className="nome"><strong>{nickname}</strong></div>
                <div className="razao">{followingState ? "Segue você" : "Novo no Instagram"}</div>
            </Texto>
        </UsuarioBox>
    )
}

const UsuarioBox = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }
`;

const Texto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;
    font-weight: 300;
    color: #8E8E8E;
    strong {
        font-weight: 500;
        color: #262626;
    }
    div:last-child {
        color: #8E8E8E;
        font-weight: 400;
    }
`;