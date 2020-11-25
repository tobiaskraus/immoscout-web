import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CardProperty } from "../components/CardProperty";
import { Property } from "../models/Property";

interface ListProps {
    className?: string;
}

export const List = (props: ListProps) => {
    const [properties, setProperties] = useState<Property[]>([]);
    useEffect(() => {
        setProperties(getAllProperties());
    }, []);
    return (
        <Wrapper>
            {properties.map((property) => (
                <CardProperty key={property.title} property={property} />
            ))}
        </Wrapper>
    );
};

function getAllProperties() {
    return [
        {
            title: "Property A",
        },
        {
            title: "Property B",
        },
        {
            title: "Property C",
        },
    ] as Property[];
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
