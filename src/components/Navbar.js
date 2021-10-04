import React from 'react'
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom'
import { MenuData } from '../data/MenuData';
import { Button } from './Button';
import { FaBars } from 'react-icons/fa'

const Nav = styled.nav`
        height:60px;
        background:red;
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


const MenuBars = styled(FaBars)`
        display:none;
        @media screen and (max-width:768px){
        display:block;
        background-size:contain;
        height:40px;
        width:40px;
        cursor:pointer;
        position:absolute;
        top:0;
        right:0;
        transform: translate(-50% , 25%);
        color:#fff
}
`

const NavMenu = styled.div`
        display:flex;
        align-items:center;
        margin-right: -48px;
        
        @media screen and (max-width:768px ){
        display:none;
        }
        
`

const NavMenuLinks = styled(Link)`
        ${NavLink}
`;


const NavBtn = styled.div`
display:flex;
align-items:center;
margin-right:20;
`
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
                <Button to="/contact" primary='true'>contact us </Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar
