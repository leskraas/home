import React, {useState} from 'react';
import {RestaurantRounded, ScheduleRounded, ShoppingCartRounded} from '@material-ui/icons';
import {IRecipe} from "../../types/sanity";
import {urlFor} from "../../utils/imageUrlBuilder";
import styled from "styled-components";
import {colors} from "../../shared/Colors";
import {useRouter} from "next/router";
import {RecipeInfo} from "../RecipeInfo";

interface IProps {
    event: MouseEvent;
    slug: string
}

export const Card: React.FC<IRecipe> = (props) => {
    const [showInfo, setShowInfo] = useState<boolean>(false);
    const router = useRouter();

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, slug: string) => {
        event.preventDefault()
        router.push({
            pathname: '/oppskrift/[slug]',
            query: {slug: slug},
        })
    }

    props.slug.current
    return (
        <CardWrapper>
            <CardHeading onClick={(e) => handleClick(e, props.slug.current)}><h2>{props.name}</h2></CardHeading>
            <CardImageWrapper show={!showInfo} onClick={() => setShowInfo(!showInfo)}> <img
                src={urlFor(props.mainImage).fit("clip").width(125).height(100)
                    .quality(100)
                    .url()}/></CardImageWrapper>
            <CardInfoWrapper show={showInfo} onClick={() => setShowInfo(!showInfo)}>
                <StyledRecipeInfo time={props.time} difficulty={props.difficulty} ingredients={props.ingredients}/>
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
    cursor: pointer;
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
    padding: 0;
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

const StyledRecipeInfo = styled(RecipeInfo)`
       & > * {
      flex: 1;
      justify-content: flex-start;
    }
`;
