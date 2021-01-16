import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { Property } from "../../models/Property";
import { globalStyles } from "../../styles/globalStyles";

interface ImageGalleryProps {
    className?: string;
    big?: boolean;
    property: Property;
}

const ImageGallery: FunctionComponent<ImageGalleryProps> = (props) => {
    return !props.property.images || !props.property.images.length ? (
        <NoImages>no images</NoImages>
    ) : props.big ? (
        <GalleryBig>
            {props.property.images.map((img) => (
                <img src={img} />
            ))}
        </GalleryBig>
    ) : (
        <GallerySmall>
            {props.property.images.map((img) => (
                <img src={img} />
            ))}
        </GallerySmall>
    );
};

export default ImageGallery;

const NoImages = styled.div`
    padding: 5px;
    background-color: ${globalStyles.colors.grayLight2};
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const GalleryBig = styled.div`
    padding: 5px;
    background-color: ${globalStyles.colors.grayLight2};
    img {
        width: 100%;
        margin: 5px 0;
    }
`;

const GallerySmall = styled.div`
    padding: 5px;
    background-color: ${globalStyles.colors.grayLight2};
    display: flex;
    overflow-x: auto;
    img {
        height: 200px;
        width: auto;
        margin: 0 5px;
    }
`;
