import React, { FunctionComponent, useContext } from "react";
import styled from "styled-components";

import { CardProperty } from "../components/CardProperty";
import { StoreContext } from "../StoreProvider";
import { MainPage } from "../templates/MainPage";

export const List: FunctionComponent = () => {
    const { properties } = useContext(StoreContext);
    return (
        <MainPage>
            <Wrapper>
                {properties.map((property) => (
                    <CardProperty key={property._id} property={property} />
                ))}
            </Wrapper>
        </MainPage>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
