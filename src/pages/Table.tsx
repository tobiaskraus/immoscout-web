import React, { FunctionComponent, useCallback, useState } from "react";
import styled from "styled-components";

import { MainPage } from "../templates/MainPage";
import { useStore } from "../store";
import { globalStyles } from "../styles/globalStyles";
import { Property } from "../models/Property";
import PropertyPreview from "../components/PropertyPreview";

export const Table: FunctionComponent = () => {
    const { properties } = useStore();
    const [preview, setPreview] = useState<Property | null>(null);
    const [markedRow, setMarkedRow] = useState<Property["_id"] | null>(null);

    const onPreviewClick = useCallback((property: Property) => {
        setPreview(property);
    }, []);

    const onPreviewClose = useCallback(() => {
        setPreview(null);
    }, []);

    return (
        <MainPage>
            <TableElement>
                <TableHead />
                <TableBody
                    properties={properties}
                    markedRow={markedRow}
                    setMarkedRow={setMarkedRow}
                    onPreviewClick={onPreviewClick}
                />
            </TableElement>
            {preview && (
                <PropertyPreview property={preview} onClose={onPreviewClose} />
            )}
        </MainPage>
    );
};

const TableElement = styled.table`
    border-collapse: collapse;
    width: 100%;
    background-color: white;
    font-size: 14px;
    td,
    th {
        border: 1px solid ${globalStyles.colors.gray};
        padding: 2px 8px;
    }
`;

const TableHead: FunctionComponent = () => (
    <thead>
        <tr>
            <th>Scout Id</th>
            <th>Title</th>
            <th>Area</th>
            <th>m²</th>
            <th>
                Price
                <br />
                (cold)
            </th>
            <th>Action</th>
        </tr>
    </thead>
);

interface TableBodyProps {
    properties: Property[];
    markedRow: string | null;
    setMarkedRow: (id: string) => void;
    onPreviewClick: (property: Property) => void;
}

const TableBody: FunctionComponent<TableBodyProps> = (props) => (
    <tbody>
        {props.properties.map((property) => (
            <TrElement
                key={property._id}
                onClick={() => props.setMarkedRow(property._id)}
                marked={props.markedRow === property._id}
            >
                <td>{property.scout_id}</td>
                <td>{property.title}</td>
                <td>{property.city_region}</td>
                <td>{property.sqm || property.sqm_wohnflaeche}</td>
                <td>{property.price_net}</td>
                <td>
                    <Button onClick={() => props.onPreviewClick(property)}>
                        Details
                    </Button>
                </td>
            </TrElement>
        ))}
    </tbody>
);

const TrElement = styled.tr<{ marked: boolean }>`
    background-color: ${(props) =>
        props.marked ? globalStyles.colors.primaryLight : undefined};
    :hover {
        background-color: ${(props) =>
            props.marked ? undefined : globalStyles.colors.grayLight2};
    }
`;

const Button = styled.button`
    background-color: ${globalStyles.colors.primary};
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 4px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
`;
