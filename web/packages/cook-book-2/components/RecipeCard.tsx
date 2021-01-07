import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { RecipeShort } from '../types/sanity';
import { urlFor } from '../utils/imageUrlBuilder';
import { RecipeInfo } from './RecipeInfo';
import { H2 } from './Typography';

type Props = {
    recipe: RecipeShort;
};

export const RecipeCard: React.FC<Props> = (props) => {
    const { recipe } = props;
    return (
        <Card>
            <LeftContainer>
                {recipe.mainImage && (
                    <Image
                        layout="fill"
                        objectFit="cover"
                        quality={40}
                        src={urlFor(recipe.mainImage)
                            .fit('clip')
                            .quality(80)
                            .width(360)
                            .url()}
                    />
                )}
            </LeftContainer>
            <RightContainer>
                <H2 size={'sm'}>{recipe.name}</H2>
                <RecipeInfo
                    ingredients={recipe.ingredients}
                    difficulty={recipe.difficulty}
                    time={recipe.time}
                    flexDirection={'column'}
                />
            </RightContainer>
            <Link href={'/oppskrift/' + recipe.slug.current} passHref>
                <A />
            </Link>
        </Card>
    );
};

const Card = styled.div`
    height: 140px;
    margin: 1rem;
    display: flex;
    position: relative;
    border-radius: ${(props) => props.theme.borderRadius.lg};
    background-color: ${(props) => props.theme.colors.backgroundSecondary};
    box-shadow: ${(props) => props.theme.shadows.primary};
    overflow: hidden;
`;
const LeftContainer = styled.div`
    position: relative;
    flex: 4 0 0;
    border-radius: ${(props) => props.theme.borderRadius.lg};
    overflow: hidden;
`;
const RightContainer = styled.div`
    padding: 1rem 1rem 2rem;
    flex: 3 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const A = styled.a`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
`;
