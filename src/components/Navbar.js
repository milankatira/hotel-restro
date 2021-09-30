import React from 'react'
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom'
import { MenuData } from '../data/MenuData';
import { Button } from './Button';


const Nav = styled.nav`
        height:60px;
        background:#000;
        display:flex;
        justify-content:space-between;
        padding:1rem;
        position:fixed;
        width:100%;
        z-index:5;
`;

const NavLink = css`
        color:#fff;
        display:flex;
        align-items:center;
        padding:0 1rem;
        height:100% ;
        cursor:pointer;
        text-decoration:none;
`

const Logo = styled(Link)`
        ${NavLink}
        font-style:italic;
`


const MenuBars = styled.i`

`

const NavMenu = styled.div`
        display:flex;
        align-items:center;
`

const NavMenuLinks = styled(Link)`
        ${NavLink}
`;


const Navbar = () => {
    return (
        <Nav>
            <Logo to='/'>
                milan
            </Logo>
            <MenuBars />
            <NavMenu>
                {MenuData.map((item, index) => (
                    <NavMenuLinks to={item.Link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
            <Button/>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
