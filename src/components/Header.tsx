import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { globalStyles } from "../styles/globalStyles";
import Icon from "./Icon";

export const Header: FunctionComponent = () => {
    return (
        <>
            <Wrapper>
                <Icon icon="grid" />
                <Icon icon="table" />
            </Wrapper>
            <PushContent />
        </>
    );
};

const headerHeight = 48;

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: ${headerHeight}px;
    background-color: ${globalStyles.colors.grayLight2};
    padding: 8px 20px;
    display: flex;
    align-items: center;
    box-shadow: ${globalStyles.shadow};
    border-bottom: ${globalStyles.colors.grayLight} 1px solid;
`;
const PushContent = styled.div`
    height: ${headerHeight}px;
`;
