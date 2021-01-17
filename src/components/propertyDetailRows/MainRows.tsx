import React, { FunctionComponent } from "react";
import { Property } from "../../models/Property";
import { Label, Row, Value } from "./Row";

interface MainRowsProps {
    property: Property;
}

const MainRows: FunctionComponent<MainRowsProps> = (props) => {
    return (
        <>
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
        </>
    );
};

export default MainRows;
