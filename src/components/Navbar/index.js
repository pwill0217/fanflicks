import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      {/* It's adding a navbar to the page. */}
      <Nav nav class="navbar navbar-dark bg-dark">
        <Bars />
  
        <NavMenu>
        {/* It's adding a class to the link that is active. */}
        <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/browse' activeStyle>
            Browse Flicks
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact
          </NavLink>
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        
      </Nav>
    </>
  );
};
  
export default Navbar;




