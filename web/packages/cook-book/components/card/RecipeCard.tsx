import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import { RecipeShort } from '../../types/sanity';
import { urlFor } from '../../utils/imageUrlBuilder';
import { colors } from '../atoms/Colors';
import { H2 } from '../atoms/Typography';
import { RecipeInfo } from '../RecipeInfo';

export const RecipeCard: React.FC<RecipeShort> = (props) => {
    const [showInfo, setShowInfo] = useState<boolean>(false);
    const router = useRouter();

    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, slug: string) => {
        event.preventDefault();
        router.push(
            {
                pathname: '/oppskrift/[slug]',
                query: { slug: slug },
            },
            `/oppskrift/${slug}`
        );
    };

    props.slug.current;
    return (
        <CardWrapper>
            <CardHeading onClick={(e) => handleClick(e, props.slug.current)}>
                <H2 size={'md'}>{props.name}</H2>
            </CardHeading>
            <CardImageWrapper show={!showInfo} onClick={() => setShowInfo(!showInfo)}>
                {props.mainImage && (
                    <img
                        alt={`${props.name}`}
                        src={urlFor(props.mainImage)
                            .fit('clip')
                            .height(100)
                            .width(150)
                            .quality(100)
                            .url()}
                    />
                )}
            </CardImageWrapper>
            <CardInfoWrapper show={showInfo} onClick={() => setShowInfo(!showInfo)}>
                <StyledRecipeInfo
                    time={props.time}
                    difficulty={props.difficulty}
                    ingredients={props.ingredients}
                />
            </CardInfoWrapper>
        </CardWrapper>
    );
};

const CardWrapper = styled.div`
    flex: 1 0 150px;
    height: 200px;
    border-radius: 20px;
    background-color: ${colors.white};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin: 0 1rem;
`;
const CardHeading = styled.div`
    font-weight: 400;
    text-align: center;
    height: 100px;
    width: 100%;
    display: flex;
    padding: 0 0.5rem;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const CardImageWrapper = styled.div<{ show: boolean }>`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    border-radius: 0 0 20px 20px;
    height: 99px;
    transition: opacity 0.5s;
    @media (pointer: none), (pointer: coarse) {
        // is mobile
        opacity: ${(props) => (props.show ? 1 : 0)};
    }
    @media (hover: hover) and (pointer: fine) {
        //is desktop
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
    @media (pointer: none), (pointer: coarse) {
        opacity: ${(props) => (props.show ? 1 : 0)};
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
