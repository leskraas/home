import { ButtonBase } from '@material-ui/core';
import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import * as t from '../types/sanity';
import { colors } from './atoms/Colors';

interface IProps {
    categories: t.Category[];
}

export const Category: NextPage<IProps> = (props) => {
    return (
        <CategoryWrapper>
            {props.categories &&
                props.categories.map((category: t.Category) => (
                    <CategoryButton key={category._id}>{category.name}</CategoryButton>
                ))}
        </CategoryWrapper>
    );
};

const CategoryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
    padding: 2rem 0;
`;

const CategoryButton = styled(ButtonBase)`
    && {
        justify-content: left;
        padding: 1rem 2rem;
        margin: 1rem 2rem;
        text-align: left;
        border-radius: 20px;
        border: 2px solid ${colors.blue};
        color: ${colors.blue};
        //background-color: ${colors.orange};
    }
`;
