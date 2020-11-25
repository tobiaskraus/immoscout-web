import React from "react";
import styled from "styled-components";
import { List } from "./pages/List";

function App() {
    return (
        <Page>
            <List />;
        </Page>
    );
}

export default App;

const Page = styled.div`
    background: #eaeaea;
    padding: 20px;
    min-height: 100%;
`;
