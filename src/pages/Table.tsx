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

    const onPreviewClick = useCallback((property: Property) => {
        setPreview(property);
    }, []);

    const onPreviewClose = useCallback(() => {
        setPreview(null);
    }, []);

    return (
        <MainPage>
            <TableElement>
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
                <tbody>
                    {properties.map((property) => (
                        <tr key={property._id}>
                            <td>{property.scout_id}</td>
                            <td>{property.title}</td>
                            <td>{property.city_region}</td>
                            <td>{property.sqm || property.sqm_wohnflaeche}</td>
                            <td>{property.price_net}</td>
                            <td>
                                <Button
                                    onClick={() => onPreviewClick(property)}
                                >
                                    Details
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
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
    tr {
        :hover {
            background-color: ${globalStyles.colors.grayLight2};
        }
    }
    td,
    th {
        border: 1px solid ${globalStyles.colors.gray};
        padding: 2px 8px;
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
