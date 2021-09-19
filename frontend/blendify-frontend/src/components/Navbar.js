import React from 'react';
import { Container, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './navbar.css';

export default function BlendifyNavbar() {
    return (
    <div>
        <Navbar color="light" primary expand="true">
            <NavbarBrand className='navbarbrand'>Blendify</NavbarBrand>
        </Navbar>
    </div>
    )
}