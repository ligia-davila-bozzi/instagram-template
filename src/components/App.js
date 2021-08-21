import styled from 'styled-components';

import Navbar from "./Navbar"

export default function App() {
    return (
        <Body>
            <Navbar />
        </Body>
    )
}

const Body = styled.div`
    background-color: #FAFAFA;
    margin: 54px 0 0;
    font-family: 'Roboto', sans-serif;
    color: #262626;
    font-weight: 400;
    font-size: 14px;
`;