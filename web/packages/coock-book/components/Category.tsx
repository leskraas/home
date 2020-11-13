import React from 'react';
import {NextPage} from "next";
import client from "../client";
import {ICategory} from "../types/sanity";
import {ButtonBase} from "@material-ui/core";
import styled from "styled-components";
import {colors} from "../shared/Colors";



interface IProps {
    categories: ICategory[];
}

export const Category: NextPage<IProps> = ({categories}) => {
    return (
        <CategoryWrapper>
            {categories && categories.map((category) => (
                <CategoryButton key={category._id}>
                    {category.name}
                </CategoryButton>))}
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
        background-color: ${colors.orange};
    }
`;
