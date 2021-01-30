import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
// import Dropdown from './Dropdown';
// import * as ROUTES from '../../constants/routes';
import './navigation.css'
// import { AuthUserContext } from '../Session';

export const Navigation = () => {
    const histoty = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        histoty.push('/')
    }
    return (
        // <div>
        //     <AuthUserContext.Consumer>
        //         {authUser =>
        //             authUser ? <NavigationAuth /> : <NavigationNonAuth />
        //         }
        //     </AuthUserContext.Consumer>
        // </div>
        <header className="main-navigation text-center">
            <nav className="main-navigation_item ">
                <ul>
                    <li> <NavLink to="/create">Create</NavLink></li>

                    <li> <NavLink to="/links">Links</NavLink></li>

                    <li>
                        {/* <NavLink to={ROUTES.CONTACTUS}>Contact Us</NavLink> */}
                        <a href="/" onClick={logoutHandler}>Log Out</a>
                    </li>

                    {/* <li><Dropdown /></li> */}
                </ul>
            </nav>
        </header>
    )
};

// const NavigationAuth = () => (

//     <header className="main-navigation text-center">
//         <nav className="main-navigation_item ">
//             <ul>
//                 <li> <NavLink to="/create">Landing</NavLink></li>

//                 <li> <NavLink to="/links">Home</NavLink></li>

//                 <li>
//                     {/* <NavLink to={ROUTES.CONTACTUS}>Contact Us</NavLink> */}
//                     <a href="/" ></a>
//                 </li>

//                 {/* <li><Dropdown /></li> */}
//             </ul>
//         </nav>
//     </header>

// );

// const NavigationNonAuth = () => (
//     <header className="main-navigation">
//         <nav className="main-navigation_item">
//             <ul>
//                 <li> <NavLink to={ROUTES.LANDING}>Landing</NavLink></li>

//                 <li>
//                     <NavLink to={ROUTES.CONTACTUS}>Contact Us</NavLink>
//                 </li>

//                 {/* <li><Dropdown /></li> */}
//             </ul>
//         </nav>

//     </header>
// );

