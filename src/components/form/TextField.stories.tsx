import React from "react";
import { Story, Meta } from "@storybook/react";
import { TextField, TextFieldProps } from "@material-ui/core";
import styled from "styled-components";

export default {
    title: "form/TextField",
} as Meta;

const Template: Story<TextFieldProps> = (args) => (
    <form noValidate autoComplete="off">
        <TextField {...args} />
    </form>
);

export const Component = Template.bind({});
Component.args = {
    id: "Standard",
    label: "Standard",
    size: "small",
};

export const Filled = Template.bind({});
Filled.args = {
    id: "Filled",
    label: "Filled",
    variant: "filled",
    size: "small",
};

export const Outlined = Template.bind({});
Outlined.args = {
    id: "Outlined",
    label: "Outlined",
    variant: "outlined",
    size: "small",
};

export const Form: Story = (args) => {
    return (
        <FormEl noValidate autoComplete="off">
            <h2>Form</h2>
            <TextField fullWidth margin="normal" label="Title" size="small" />
            <TextField
                fullWidth
                margin="normal"
                label="District"
                size="small"
            />
            <Grid>
                <TextField
                    fullWidth
                    margin="normal"
                    label="€ (Netto)"
                    size="small"
                    type="number"
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="m²"
                    size="small"
                    type="number"
                />
            </Grid>
        </FormEl>
    );
};

const Grid = styled.div`
    display: grid;
    column-gap: 10px;
    grid-template-columns: 50% auto;
`;

const FormEl = styled.form`
    width: 500px;
`;

const Flex = styled.div`
    display: flex;
`;

const FlexItemHalf = styled.div`
    flex: 0 0 50%;
`;
