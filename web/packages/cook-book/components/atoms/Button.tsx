import React from 'react';
import styled from 'styled-components';
import { Ripple } from './Ripple';

interface IButton {
    className?: string;
    children?: any;
    onClick?: () => void;
}

export const Button: React.FC<IButton> = (props) => {
    const { className, children } = props;

    return (
        <StyledButton className={className}>
            <ButtonText>{children}</ButtonText>
            <Ripple />
        </StyledButton>
    );
};

const StyledButton = styled.button`
    margin: 1rem 2rem;
    border-radius: 20rem;
    font-size: 1.4rem;
    background: ${(props) => props.theme.colors.backgroundSecondary};
    position: relative;
    cursor: pointer;
    outline: none;
    border: 0;
    box-sizing: border-box;
    font-weight: 500;
    padding: 10px 26px;
    display: inline-flex;
    vertical-align: middle;
    justify-content: center;
    align-items: center;
    box-shadow: ${(props) => props.theme.shadows.primary};
    transition: all 1s ease-in-out;
    &:hover {
        background: ${(props) =>
            `linear-gradient(260.72deg, #FFC367 0%, ${props.theme.colors.secondary} 100%)`};
    }
`;

const ButtonText = styled.span`
    width: 100%;
    display: inherit;
    align-items: inherit;
    justify-content: inherit;
`;
