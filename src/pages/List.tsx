import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { CardProperty } from "../components/CardProperty";
import { MainPage } from "../templates/MainPage";
import { useStore } from "../store";

export const List: FunctionComponent = () => {
    const { properties } = useStore();
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
