import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { RecipeShort } from '../types/sanity';
import { CardLayout } from '../types/SharedTypes';
import { Card } from './atoms/Card';
import { CardContent } from './atoms/CardContent';
import { CardImage } from './atoms/CardImage';
import { H2 } from './atoms/Typography';
import { RecipeInfo } from './RecipeInfo';

interface Props extends CardLayout {
    recipe: RecipeShort;
}

export const RecipeCard: React.FC<Props> = (props) => {
    const { recipe, layout } = props;
    return (
        <Card layout={layout}>
            {recipe.mainImage && (
                <CardImage
                    flexGrow={layout === 'vertical' ? 12 : undefined}
                    image={recipe.mainImage}
                />
            )}
            <CardContent>
                <H2 size={'sm'}>{recipe.name}</H2>
                <StyledRecipeInfo
                    flexDirection={layout === 'vertical' ? 'row' : 'column'}
                    time={recipe.time}
                    difficulty={recipe.difficulty}
                    ingredients={recipe.ingredients}
                />
            </CardContent>
            <Link
                href={{
                    pathname: '/oppskrift/[slug]',
                    query: { slug: recipe.slug.current },
                }}
                as={'oppskrift/' + recipe.slug.current}
                passHref
            >
                <A />
            </Link>
        </Card>
    );
};

const StyledRecipeInfo = styled(RecipeInfo)`
    && {
        font-size: 1rem;
    }
`;

const A = styled.a`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    cursor: pointer;
`;
