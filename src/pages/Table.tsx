import React, { FunctionComponent } from "react";
import styled from "styled-components";

import { MainPage } from "../templates/MainPage";
import { useStore } from "../store";
import { globalStyles } from "../styles/globalStyles";

export const Table: FunctionComponent = () => {
    const { properties } = useStore();
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
                        </tr>
                    ))}
                </tbody>
            </TableElement>
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
