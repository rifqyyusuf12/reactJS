import React, { Component } from 'react';

//statless functional component
const NavBar = props => {
    console.log('NavBar - Rendered');

    return ( 
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
            Navbar
            <span className="tbl tbl-pill tbl-primary"> 
            {props.totalCounters}</span>
        </a>
    </nav>
     );
};
 
export default NavBar ;
