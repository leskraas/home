import React from 'react';
import styled from 'styled-components';
import SubjectRoundedIcon from '@material-ui/icons/SubjectRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';

export const NavBar: React.FC = () => {
    return (
        <Nav>
            <ul>
                <SubjectRoundedIcon />
            </ul>
            <ul>
                <FavoriteRoundedIcon />
            </ul>
            <ul>
                <PersonRoundedIcon />
            </ul>
        </Nav>
    );
};

const Nav = styled.nav`
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${(props) => props.theme.colors.backgroundSecondary};
    box-shadow: ${(props) => props.theme.shadows.secondary};
    font-size: ${(props) => props.theme.fontSize.md};
    height: 60px;
    width: 100vw;
    svg {
        font-size: 25px;
    }
`;
