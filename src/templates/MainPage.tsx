import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Header } from "../components/Header";

export const MainPage: FunctionComponent = (props) => {
    return (
        <Page>
            <Header />
            {props.children}
        </Page>
    );
};

export const Page = styled.div`
    background: #eaeaea;
    padding: 20px;
    min-height: 100%;
`;
