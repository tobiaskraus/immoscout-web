import React, { FunctionComponent, useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { Property } from "../models/Property";
import { globalStyles } from "../styles/globalStyles";
import ImageGallery from "./images/ImageGallery";
import MainRows from "./propertyDetailRows/MainRows";
import OtherRows from "./propertyDetailRows/OtherRows";

interface PropertyPreviewProps {
    property: Property;
    onClose: () => void;
    className?: string;
}

const PropertyPreview: FunctionComponent<PropertyPreviewProps> = (props) => {
    const [isGalleryBig, setGalleryBig] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);
    const galleryRef = useRef<HTMLDivElement>(null);

    const shrinkGallery = useCallback(() => {
        setGalleryBig(false);
        // scroll to top, where gallery starts
        if (modalRef.current && galleryRef.current) {
            modalRef.current.scrollTop = galleryRef.current.offsetTop;
        }
    }, []);

    const extendGallery = useCallback(() => {
        setGalleryBig(true);
    }, []);

    return (
        <ModalWrapper onClick={props.onClose}>
            <Modal onClick={(e) => e.stopPropagation()} ref={modalRef}>
                <h2>{props.property.title}</h2>
                <MainRows property={props.property} />
                <hr />
                <div ref={galleryRef}>
                    <GalleryOptions>
                        <button
                            disabled={!isGalleryBig}
                            onClick={shrinkGallery}
                        >
                            small
                        </button>
                        <button disabled={isGalleryBig} onClick={extendGallery}>
                            big
                        </button>
                    </GalleryOptions>
                    <ImageGallery
                        big={isGalleryBig}
                        property={props.property}
                    />
                </div>
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
    padding: 0 20px 30px 20px;
`;

const GalleryOptions = styled.div`
    position: sticky;
    background-color: ${globalStyles.colors.grayLight2};
    top: 0;
    padding: 10px 0;
`;
