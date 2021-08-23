import styled from 'styled-components';

import Navbar from "./Navbar";
import Corpo from "./Corpo";
import FundoMobile from "./FundoMobile";

export default function App() {
    return (
        <Body>
            <Navbar />
            <Corpo />
            <FundoMobile />
        </Body>
    )
}

const Body = styled.div`
    box-sizing: border-box;
    background-color: #FAFAFA;
    margin: 58px 0 0;
    font-family: 'Roboto', sans-serif;
    color: #262626;
    font-weight: 400;
    font-size: 14px;
`;