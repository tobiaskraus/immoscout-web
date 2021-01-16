import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { globalStyles } from "../styles/globalStyles";
import Icon from "./Icon";

export const Header: FunctionComponent = () => {
    return (
        <>
            <Wrapper>
                <HeaderSection>
                    <Title>
                        <TitlePart1>TK</TitlePart1>
                        <span>ImmoScout</span>
                    </Title>
                </HeaderSection>
                <HeaderSection>
                    <Tab>
                        <NavLink to="/list" activeClassName="active">
                            <Icon icon="grid" />
                        </NavLink>
                    </Tab>
                    <Tab>
                        <NavLink to="/table" activeClassName="active">
                            <Icon icon="table" />
                        </NavLink>
                    </Tab>
                </HeaderSection>
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
    justify-content: space-between;
    align-items: center;
    box-shadow: ${globalStyles.shadow};
    border-bottom: ${globalStyles.colors.grayLight} 1px solid;
`;

const HeaderSection = styled.div`
    display: flex;
    align-items: center;
    &:last-child {
        justify-content: flex-end;
    }
`;

const PushContent = styled.div`
    height: ${headerHeight}px;
`;

const Title = styled.h3`
    margin: 0;
    font-size: 18px;
    font-weight: medium;
    font-family: Arial, Helvetica, sans-serif;
    color: ${globalStyles.colors.grayDark};
`;

const TitlePart1 = styled.span`
    margin-right: 4px;
    color: ${globalStyles.colors.primary};
`;

const Tab = styled.div`
    > a {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 10px;
        padding-right: 10px;
        height: ${headerHeight}px;
        color: inherit;
        text-decoration: none;
        &.active {
            cursor: default;
            border-bottom: 3px solid ${globalStyles.colors.primary};
        }
    }
`;
