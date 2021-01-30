import React from 'react';
import { Dropdown, NavDropdown } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut';
import { AuthUserContext } from '../Session';
import * as ROUTES from '../../constants/routes';


const DropdownMenu = () => (
    <AuthUserContext.Consumer>
        {authUser =>
            authUser ? (<DropdownMenuAuth authUser={authUser} />) : (<DropdownMenuNonAuth />)
        }
    </AuthUserContext.Consumer>
);

const DropdownMenuAuth = ({ authUser }) => (

    <NavDropdown title="My Account" id="basic-nav-dropdown" >
        {authUser.roles && (
            <div>
                <NavDropdown.Item as={Link} to={ROUTES.USERS}>Manage Users</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={ROUTES.PRODUCTS}>Manage Products</NavDropdown.Item>
                <Dropdown.Divider />
            </div>)}
        {/* <NavDropdown.Item as={Link} to={ROUTES.ADMIN}>Admin</NavDropdown.Item> */}
        <NavDropdown.Item as={Link} to={ROUTES.ACCOUNT}>Profile</NavDropdown.Item>
        <NavDropdown.Item as={Link} to={ROUTES.CART}>Cart</NavDropdown.Item>



        < SignOutButton />
    </NavDropdown>
);

const DropdownMenuNonAuth = () => (

    <NavDropdown title="My Account" id="basic-nav-dropdown">
        <Dropdown.Item as={Link} to={ROUTES.SIGN_IN}>Sign In</Dropdown.Item>
        <Dropdown.Item as={Link} to={ROUTES.SIGN_UP}>Sing Up</Dropdown.Item>

    </NavDropdown>
);
export default DropdownMenu;