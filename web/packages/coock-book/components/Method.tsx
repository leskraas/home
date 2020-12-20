import React from 'react';
import styled from 'styled-components';
import { MethodStep } from '../types/sanity';
import { H2 } from './atoms/Typography';

type Props = {
    methodSteps: MethodStep[];
    className?: string;
};

export const Method: React.FC<Props> = (props) => {
    const { methodSteps, className } = props;
    return (
        <Container className={className}>
            <H2 size={'lg'}>Fremgangsmåte</H2>
            <List>
                {methodSteps.map((methodStep) => (
                    <Li key={methodStep._key}>{methodStep.stepText}</Li>
                ))}
            </List>
        </Container>
    );
};

const Container = styled.div``;
const List = styled.ol`
    margin: 0.5em 0 0 1em;
    font-size: ${(props) => props.theme.fontSize.sm};
    color: ${(props) => props.theme.colors.textSecondary};
    font-weight: 500;
    list-style-position: inside;
`;
const Li = styled.li`
    line-height: 2em;
    margin-bottom: 1em;
    :last-of-type {
        margin-bottom: 0;
    }
`;
