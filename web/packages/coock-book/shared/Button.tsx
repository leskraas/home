import React from 'react';
import styled from "styled-components";
import {ButtonBase} from "@material-ui/core";
import {colors} from "./Colors";


interface IButton {
    className?: string;
    children?: any;
}

export const Button: React.FC<IButton> = ({className, children}) => {
    return (
        <StyledButton className={className}>
            {children}
        </StyledButton>
    );
};


const StyledButton = styled(ButtonBase)`
    && {
        justify-content: left;
        padding: 1rem 2rem;
        margin: 1rem 2rem;
        text-align: left;
        border-radius: 20px;
        background-color: ${colors.orange};
    }
`;
