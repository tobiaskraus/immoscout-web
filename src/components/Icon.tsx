/**
 * Icons from https://iconsvg.xyz/
 * - customaizeable
 * - clean svg code
 */

import React, { FunctionComponent } from "react";

interface IconProps {
    icon: "menu" | "table" | "grid";
    color?: string;
    size?: number;
}

const defaultProps: Partial<IconProps> = {
    color: "currentColor",
    size: 24,
};

export const Icon: FunctionComponent<IconProps> = (props) => {
    switch (props.icon) {
        case "menu":
            return <Menu {...props} />;
        case "table":
            return <Table2 {...props} />;
        case "grid":
            return <Grid {...props} />;
        default:
            return <Square {...props} />;
    }
};
Icon.defaultProps = defaultProps;

export default Icon;

const Svg: FunctionComponent<IconProps> = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width={props.size}
        height={props.size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={props.color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        {props.children}
    </svg>
);

const Menu = (props: IconProps) => (
    <Svg {...props}>
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </Svg>
);

const Square = (props: IconProps) => (
    <Svg {...props}>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
    </Svg>
);

const Table2 = (props: IconProps) => (
    <Svg {...props}>
        <path d="M3 3h18v18H3zM21 9H3M21 15H3M12 3v18" />
    </Svg>
);

const Grid = (props: IconProps) => (
    <Svg {...props}>
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
    </Svg>
);
