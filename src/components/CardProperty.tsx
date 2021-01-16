import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { Property } from "../models/Property";
import { globalStyles } from "../styles/globalStyles";
import MainRows from "./propertyDetailRows/MainRows";
import OtherRows from "./propertyDetailRows/OtherRows";

interface CardPropertyProps {
    className?: string;
    property: Property;
}

export const CardProperty: FunctionComponent<CardPropertyProps> = (props) => {
    return (
        <Card>
            <h2>{props.property.title}</h2>
            <div>
                <MainRows property={props.property} />
                <hr />
                <OtherRows
                    property={props.property}
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
