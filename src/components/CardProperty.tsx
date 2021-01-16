import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Property } from "../models/Property";
import { globalStyles } from "../styles/globalStyles";

interface CardPropertyProps {
    className?: string;
    property: Property;
}

export const CardProperty: FunctionComponent<CardPropertyProps> = (props) => {
    return (
        <Card>
            <h2>{props.property.title}</h2>
            <div>
                <Rows {...props} />
                <hr />
                <OtherRows
                    {...props}
                    excludeKey={[
                        "sqm_wohnflaeche",
                        "price_total",
                        "title",
                        "images",
                    ]}
                />
            </div>
        </Card>
    );
};

const Card = styled.div`
    background: white;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 10px 20px;
    box-shadow: ${globalStyles.shadow};
`;

const Rows = (props: CardPropertyProps) => (
    <div>
        <Row>
            <Label>Wohnfläche</Label>
            <Value>{props.property.sqm_wohnflaeche}</Value>
        </Row>
        <Row>
            <Label>Preis Netto</Label>
            <Value>{props.property.price_net}</Value>
        </Row>
        <Row>
            <Label>Preis Total</Label>
            <Value>{props.property.price_total}</Value>
        </Row>
    </div>
);

type OtherRowsProps = CardPropertyProps & { excludeKey: string[] };
const OtherRows = (props: OtherRowsProps) => {
    const rows = Object.entries(props.property).filter(
        ([key]) => props.excludeKey.indexOf(key) === -1
    );
    return (
        <>
            {rows.map(([key, value]) => (
                <Row>
                    <Label>{key}</Label>
                    <Value>{JSON.stringify(value)}</Value>
                </Row>
            ))}
        </>
    );
};

const Row = styled.div`
    display: flex;
`;

const Label = styled.div`
    flex: 0 0 30%;
    color: ${globalStyles.colors.textLight};
`;

const Value = styled.div`
    flex: 0 0 70%;
    color: ${globalStyles.colors.text};
`;
