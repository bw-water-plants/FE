import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    font-family: 'Lemon', cursive;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 50px;
    border-bottom: 1px solid black;
`

const HeaderTitle = styled.div`
    
`

const HeaderNav = styled.div`

    

        a {
            text-decoration: none;
            padding: 10px;
            
            
        }
`

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderTitle>
                <h1>Water My Plants</h1>
            </HeaderTitle>
            <HeaderNav>
                <Link exact to="/">Home</Link>
                <Link to="/log-in">Log In</Link>
                <Link to="/register">Register</Link>
                <Link to="/plants">My Plants</Link>
            </HeaderNav>
        </HeaderContainer>
    )
}

export default Header;