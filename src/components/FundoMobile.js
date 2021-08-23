import styled from 'styled-components';

export default function FundoMobile() {
    return(
        <FundoMobileBox>
            <ion-icon name="home"></ion-icon>
            <ion-icon name="search-outline"></ion-icon>
            <ion-icon name="add-circle-outline"></ion-icon>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
        </FundoMobileBox>
    )
}

const FundoMobileBox = styled.div`
    display: none;
    cursor: pointer;
    box-sizing: border-box;
    @media (max-width: 614px) {
        display: flex;
        padding: 0 20px;
        justify-content: space-between;
        align-items: center;
        font-size: 24px;
        background-color: #FFF;
        border-top: 1px solid #DBDBDB;
        height: 54px;
        width: 100%;
        position: fixed;
        bottom: 0;
        left: 0;
    }
`;