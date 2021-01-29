import React, { FunctionComponent, useCallback, useContext } from "react";
import styled from "styled-components";
import { StoreContext } from "../StoreProvider";
import { globalStyles } from "../styles/globalStyles";

interface APIToggleProps {
    className?: string;
}

const APIToggle: FunctionComponent<APIToggleProps> = (props) => {
    const { localApiMode, setLocalApiMode } = useContext(StoreContext);

    const onClick = useCallback(() => {
        console.log("click. useLocalApi:", localApiMode);
        setLocalApiMode(!localApiMode);
    }, [localApiMode, setLocalApiMode]);
    return (
        <Container>
            <Item active={localApiMode} onClick={onClick}>
                local API
            </Item>
            <Item active={!localApiMode} onClick={onClick}>
                global API
            </Item>
        </Container>
    );
};

export default APIToggle;

const Container = styled.div`
    display: flex;
    border-radius: 4px;
    padding: 2px;
    background-color: ${globalStyles.colors.grayLight};
    width: 200px;
    font-size: 13px;
    font-weight: bold;
`;

const Item = styled.div<{ active: boolean }>`
    flex: 0 0 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) =>
        props.active ? "white" : globalStyles.colors.grayLight};
    color: ${(props) =>
        props.active
            ? globalStyles.colors.text
            : globalStyles.colors.textLight};
    cursor: ${(props) => (props.active ? undefined : "pointer")};
    pointer-events: ${(props) => (props.active ? "none" : undefined)};
`;
