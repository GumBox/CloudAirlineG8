import React from 'react';

import { Outlet } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Layout1 = () => {
  return (
    <>
      <Navbar>
        <Nav>
          <Nav.Link as={NavLink} to="/home1" exact>
            Home
          </Nav.Link> 
        </Nav>
      </Navbar>

      <Outlet />
    </>
  );
};

export default Layout1;
