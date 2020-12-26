import React, { ReactChild } from 'react';
import styled from 'styled-components';

type CardContentProps = {
    children: ReactChild | ReactChild[];
    flexGrow?: number;
};

export const CardContent: React.FC<CardContentProps> = (props) => {
    const { children, flexGrow } = props;
    return (
        <ContentContainer flexGrow={flexGrow ?? 4}>
            <Padding>{children}</Padding>
        </ContentContainer>
    );
};

const ContentContainer = styled.div<{ flexGrow: number }>`
    display: flex;
    flex-direction: column;
    flex-grow: ${(props) => props.flexGrow};
    flex-basis: 0;
    flex-shrink: 1;
`;
const Padding = styled.div`
    padding: 1rem;
`;
