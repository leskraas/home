import React, {useEffect, useRef, useState} from 'react';
import {RestaurantRounded, ScheduleRounded, ShoppingCartRounded} from '@material-ui/icons';
import {IRecipeShort} from "../../types/sanity";
import {urlFor} from "../../utils/imageUrlBuilder";
import styled from "styled-components";
import {colors} from "../../shared/Colors";

export const Card: React.FC<IRecipeShort> = (props) => {
    const [showInfo, setShowInfo] = useState<boolean>(false);

    return (
        <CardWrapper>
            <CardHeading><h2>{props.name}</h2></CardHeading>
                <CardImageWrapper show={!showInfo} onClick={()=> setShowInfo(!showInfo)}> <img
                    src={urlFor(props.mainImage).fit("clip").width(125).height(100)
                        .quality(100)
                        .url()}/></CardImageWrapper>
                <CardInfoWrapper show={showInfo} onClick={() => setShowInfo(!showInfo)}>
                    <IconAndText><IconCircle><ScheduleRounded/></IconCircle><Text>{props.time.minutes}&nbsp;
                        <small>min</small></Text></IconAndText>
                    <IconAndText><IconCircle><RestaurantRounded/></IconCircle><small>{props.difficulty}</small></IconAndText>
                    <IconAndText><IconCircle><ShoppingCartRounded/></IconCircle><Text>{props.ingredients.length}&nbsp;
                        <small>ingredienser</small></Text></IconAndText>
                </CardInfoWrapper>
        </CardWrapper>
    );
};


const CardWrapper = styled.div`
    flex: 0 0 125px;
    height: 170px;
    width: 125px;
    border-radius: 20px;
    background-color: ${colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin: 0 1rem;
`;
const CardHeading = styled.div`
    font-size: 1.6rem;
    font-weight: 400;
    color: ${colors.blue};
    text-align: center;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`;


const CardImageWrapper = styled.div<{ show: boolean }>`
    position: absolute;
    bottom: 0;
    left: 0;
    overflow: hidden;
    border-radius: 0 0 20px 20px;
    height: 100px;
    transition: opacity 0.5s;
    @media (pointer:none), (pointer:coarse){ // is mobile
        opacity: ${props => props.show ? 1 : 0};
    }
    @media (hover: hover) and (pointer: fine) { //is desktop
        opacity: 1;
        ${CardWrapper}:hover & {
            opacity: 0;
         }
    }
`;
const CardInfoWrapper = styled.div<{ show: boolean }>`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: .5rem 0 .8rem 1rem;
    width: 100%;
    height: 100px;
    
    transition: opacity 0.5s;
    @media (pointer:none), (pointer:coarse){
        opacity: ${props => props.show ? 1 : 0};
    }
    @media (hover: hover) and (pointer: fine) {
        opacity: 0;
        ${CardWrapper}:hover & {
            opacity: 1;
         }
    }
`;
const IconAndText = styled.div`
    display: flex;
    align-items: center;
    color: ${colors.blue};
    & + & {
    margin-top: .5rem;
    }
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
