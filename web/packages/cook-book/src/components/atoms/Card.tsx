import React from 'react';
import styled, { css } from 'styled-components';
import { CardLayout } from '../../types/SharedTypes';

export const Card: React.FC<CardLayout> = (props) => {
    const { children, layout } = props;
    return (
        <FullWidth>
            <CardContainer layout={layout}>{children}</CardContainer>
        </FullWidth>
    );
};

const FullWidth = styled.div`
    display: flex;
    padding: 1rem;
`;

const CardContainer = styled.div<CardLayout>`
    display: inline-flex;
    position: relative;
    border-radius: ${(props) => props.theme.borderRadius.lg};
    background-color: ${(props) => props.theme.colors.backgroundSecondary};
    box-shadow: ${(props) => props.theme.shadows.primary};
    flex: 1 1 0;
    height: 140px;
    ${(props) =>
        props.layout === 'vertical' &&
        css`
            flex-direction: column;
            height: 250px;
            width: 210px;
        `}
`;
