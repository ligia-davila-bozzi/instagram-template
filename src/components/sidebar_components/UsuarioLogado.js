import styled from "styled-components";

export default function UsuarioLogado(props) {
    const { nickname, username, imgPath } = props;
    return (
        <UsuarioBox>
            <img alt="" src={imgPath} />
            <Texto>
                <strong>{nickname}</strong>
                {username}
            </Texto>
        </UsuarioBox>
    )
}

const UsuarioBox = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
    }
`;

const Texto = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 14px;
    font-weight: 300;
    color: #8E8E8E;
    box-sizing: border-box;
    strong {
        font-weight: 500;
        color: #262626;
    }
`;