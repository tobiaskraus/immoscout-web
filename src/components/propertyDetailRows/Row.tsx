import React from "react";
import styled from "styled-components";
import { globalStyles } from "../../styles/globalStyles";

export const Row = styled.div`
    display: flex;
`;

export const Label = styled.div`
    flex: 0 0 30%;
    color: ${globalStyles.colors.textLight};
`;

export const Value = styled.div`
    flex: 0 0 70%;
    color: ${globalStyles.colors.text};
    white-space: pre-wrap;
`;
