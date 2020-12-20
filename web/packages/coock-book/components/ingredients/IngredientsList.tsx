import React from 'react';
import styled from 'styled-components';
import { Ingredient } from '../../types/sanity';
import { H2 } from '../atoms/Typography';

type Props = {
    ingredients: Ingredient[];
    className?: string;
};

export const IngredientsList: React.FC<Props> = (props) => {
    const { ingredients, className } = props;
    return (
        <Container className={className}>
            <H2 size={'lg'}>Ingredienser</H2>
            <List>
                {ingredients.map((ingredient) => (
                    <Li key={ingredient._key}>
                        <div>
                            {ingredient.quantity.amount}&nbsp;
                            {ingredient.quantity.unit}
                        </div>
                        <div>
                            {ingredient.name.name}
                            {ingredient.extendedText && `(${ingredient.extendedText})`}
                        </div>
                    </Li>
                ))}
            </List>
        </Container>
    );
};

const Container = styled.div``;
const List = styled.ul`
    margin: 0.5em 0 0 1em;
    list-style: none;
    font-size: ${(props) => props.theme.fontSize.sm};
    color: ${(props) => props.theme.colors.textSecondary};
    font-weight: 500;
`;
const Li = styled.li`
    line-height: 2em;
    display: flex;
    & > *:first-of-type {
        min-width: 4em;
    }
    & > *:not(:first-of-type) {
        margin-left: 0.5em;
    }
`;
