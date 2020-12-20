import React from 'react';
import styled from 'styled-components';

type Props = {
    className?: string;
};

export const ShadowBox: React.FC<Props> = (props) => {
    return <BoxContainer className={props.className}>{props.children}</BoxContainer>;
};

const BoxContainer = styled.div`
    background-color: ${(props) => props.theme.colors.backgroundSecondary};
    border-radius: ${(props) => props.theme.borderRadius.lg};
    box-shadow: ${(props) => props.theme.shadows.primary};
`;
