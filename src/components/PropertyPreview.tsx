import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Property } from "../models/Property";
import MainRows from "./propertyDetailRows/MainRows";
import OtherRows from "./propertyDetailRows/OtherRows";

interface PropertyPreviewProps {
    property: Property;
    onClose: () => void;
    className?: string;
}

const PropertyPreview: FunctionComponent<PropertyPreviewProps> = (props) => {
    return (
        <ModalWrapper onClick={props.onClose}>
            <Modal>
                <h2>{props.property.title}</h2>
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
            </Modal>
        </ModalWrapper>
    );
};

export default PropertyPreview;

const ModalWrapper = styled.div`
    position: fixed;
    /* position: absolute; */
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    /* bottom: 0; */
    /* right: 0; */
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
    /* overflow-y: auto; */
    /* max-height: 100vh; */
`;

const Modal = styled.div`
    width: 800px;
    max-height: 90vh;
    overflow-y: auto;
    max-width: calc(100vw - 60px);
    border-radius: 4px;
    background-color: white;
    padding: 20px 30px;
`;
