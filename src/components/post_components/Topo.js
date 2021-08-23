import styled from 'styled-components';

export default function PostTopo(props) {
    const { userImg, username } = props;
    return (
        <Topo>
            <Usuario>
                <img alt="" src={userImg} />
                {username}
            </Usuario>
            <div className="acoes"><ion-icon name="ellipsis-horizontal"></ion-icon></div>
        </Topo>
    )
}

const Topo = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 13px 16px;
    font-size: 14px;
    font-weight: 500;
    box-sizing: border-box;
    img {
        width: 32px;
        height: 32px;
        margin-right: 10px;
        cursor: pointer;
    }
    .acoes {
        display: flex;
        align-items: center;
    }
`;

const Usuario = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    box-sizing: border-box;
    img {
        border-radius: 16px;
    }
`;