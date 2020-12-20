import { RestaurantRounded, ScheduleRounded, ShoppingCartRounded } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { Difficulty, Time } from '../types/sanity';
import { colors } from './atoms/Colors';

interface IRecipeInfo {
    time: Time;
    difficulty: Difficulty;
    ingredients: any[];
    className?: string;
    children?: any;
}

export const RecipeInfo: React.FC<IRecipeInfo> = (props) => {
    return (
        <RecipeInfoContainer className={props.className}>
            <IconAndText>
                <ScheduleRounded />
                <Text>{props.time.minutes}&nbsp; min</Text>
            </IconAndText>
            <IconAndText>
                <RestaurantRounded />
                <Text>{props.difficulty}</Text>
            </IconAndText>
            <IconAndText>
                <ShoppingCartRounded />
                <Text>{props.ingredients.length}&nbsp; ingredienser</Text>
            </IconAndText>
            {props.children}
        </RecipeInfoContainer>
    );
};

const RecipeInfoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`;

const IconAndText = styled.div`
    display: flex;
    align-items: center;
    color: ${colors.orange};
    margin: 0.5rem 0.5rem 0;
    svg {
        font-size: 18px;
    }
`;

const Text = styled.p`
    color: ${colors.brown};
    font-size: 1.2rem;
    margin-left: 0.2rem;
    align-self: center;
    font-weight: lighter;
    white-space: nowrap;
`;
