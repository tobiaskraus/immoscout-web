import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { CardProperty } from "../components/CardProperty";
import { Property } from "../models/Property";
import { fetchNormal } from "../utils/fetch";

interface ListProps {
    className?: string;
}

export const List = (props: ListProps) => {
    const [properties, setProperties] = useState<Property[]>([]);
    useEffect(() => {
        fetchNormal<Property[]>("GET", `/exposes`).then((response) => {
            setProperties(response.data);
        });
    }, []);
    return (
        <Wrapper>
            {properties.map((property) => (
                <CardProperty key={property.title} property={property} />
            ))}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
