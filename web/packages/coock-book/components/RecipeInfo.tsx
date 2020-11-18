import React from 'react';
import {RestaurantRounded, ScheduleRounded, ShoppingCartRounded} from "@material-ui/icons";
import styled from "styled-components";
import {colors} from "../shared/Colors";
import {ITime, TDifficulty} from "../types/sanity";

interface IRecipeInfo {
    time: ITime;
    difficulty: TDifficulty;
    ingredients: any[];
    className?: string;
    children?: any;
}

export const RecipeInfo: React.FC<IRecipeInfo> = (props) => {
    return (
        <RecipeInfoContainer className={props.className}>
            <IconAndText><IconCircle><ScheduleRounded/></IconCircle><Text>{props.time.minutes}&nbsp;
                <small>min</small></Text></IconAndText>
            <IconAndText><IconCircle><RestaurantRounded/></IconCircle><small>{props.difficulty}</small></IconAndText>
            <IconAndText><IconCircle><ShoppingCartRounded/></IconCircle><Text>{props.ingredients.length}&nbsp;
                <small>ingredienser</small></Text></IconAndText>
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
    color: ${colors.blue};
    margin: .5rem .5rem 0;
`;
const IconCircle = styled.div`
    background-color: ${colors.blue};
    width: 24px;
    height: 24px;
    color: ${colors.orange};
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: .5rem;
    svg {
    font-size: 18px;
    }
`;

const Text = styled.p`
font-size: 1.4rem;
align-self: center;
small {
font-size: 1rem;
}
`;
