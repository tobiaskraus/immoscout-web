import React from "react";
import styled from "styled-components";
import { Property } from "../models/Property";

interface CardPropertyProps {
    className?: string;
    property: Property;
}

export const CardProperty = (props: CardPropertyProps) => {
    return (
        <Card>
            <h2>{props.property.title}</h2>
        </Card>
    );
};

const Card = styled.div`
    background: white;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 10px 20px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
`;
