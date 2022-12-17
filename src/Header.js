import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import AuthButtons from './auth/AuthButtons';
import { withAuth0 } from '@auth0/auth0-react';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="primary">
        <Navbar.Brand>Favorited Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link>
        </NavItem>
        <NavItem><Link to="/about" className="nav-link">About</Link>
        
        </NavItem>
        <AuthButtons />
      </Navbar>
    )
  }
}

export default withAuth0(Header);
