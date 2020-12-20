import React from 'react';
import styled from 'styled-components';

type Props = {
    className?: string;
};

export const Container: React.FC<Props> = (props) => {
    const { className, children } = props;
    return <StyledContainer className={className}>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
    padding: 0 2em;
    max-width: 500px;
    width: 100%;
    margin: 0 auto;
`;
