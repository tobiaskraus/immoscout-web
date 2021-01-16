import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { CardProperty } from "../components/CardProperty";
import { Property } from "../models/Property";
import { MainPage } from "../templates/MainPage";
import { fetchNormal } from "../utils/fetch";

interface ListProps {
    className?: string;
}

export const List = (props: ListProps) => {
    const [properties, setProperties] = useState<Property[]>([]);
    useEffect(() => {
        fetchNormal<Property[]>("GET", `/properties`).then((response) => {
            setProperties(response.data);
        });
    }, []);
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
