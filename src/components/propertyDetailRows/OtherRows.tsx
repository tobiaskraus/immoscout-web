import React, { FunctionComponent } from "react";
import { Property } from "../../models/Property";
import { Row, Label, Value } from "./Row";

interface OtherRowsProps {
    property: Property;
    excludeKey: string[];
}

/**
 * render all property properties in rows, besides the ones specified in `props.excludeKey`
 */
const OtherRows: FunctionComponent<OtherRowsProps> = (props) => {
    const rows = Object.entries(props.property).filter(
        ([key]) => props.excludeKey.indexOf(key) === -1
    );
    return (
        <>
            {rows.map(([key, value]) => (
                <Row key={key}>
                    <Label>{key}</Label>
                    <Value>
                        {typeof value === "string"
                            ? value
                            : JSON.stringify(value)}
                    </Value>
                </Row>
            ))}
        </>
    );
};

export default OtherRows;
