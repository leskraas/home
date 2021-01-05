import {
    RestaurantRounded,
    ScheduleRounded,
    ShoppingCartRounded,
} from '@material-ui/icons';
import React from 'react';
import styled, { css } from 'styled-components';
import { Difficulty, Time } from '../types/sanity';

interface IRecipeInfo {
    time: Time;
    difficulty: Difficulty;
    ingredients: any[];
    className?: string;
    children?: any;
    flexDirection?: 'column' | 'row';
}

export const RecipeInfo: React.FC<IRecipeInfo> = (props) => {
    return (
        <RecipeInfoContainer
            className={props.className}
            column={props.flexDirection === 'column'}
        >
            <IconAndText>
                <ScheduleRounded />
                <Text>{props.time.minutes}&thinsp;min</Text>
            </IconAndText>
            <IconAndText>
                <RestaurantRounded />
                <Text>{props.difficulty}</Text>
            </IconAndText>
            <IconAndText>
                <ShoppingCartRounded />
                <Text>{props.ingredients.length}&thinsp;ingredienser</Text>
            </IconAndText>
            {props.children}
        </RecipeInfoContainer>
    );
};

const RecipeInfoContainer = styled.div<{ column: boolean }>`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    ${(props) =>
        props.column &&
        css`
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
        `}
`;

const IconAndText = styled.div`
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.colors.secondary};
    margin: 0.5rem 0.5rem 0 0;
`;

const Text = styled.p`
    color: ${(props) => props.theme.colors.primary};
    margin-left: 0.2rem;
    align-self: center;
    font-weight: lighter;
    white-space: nowrap;
`;
