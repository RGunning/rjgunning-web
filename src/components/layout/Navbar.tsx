import React from 'react';
import { Link, NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  render() {

    return (
      <nav className="nav-wrapper blue-grey darken-2">
        <div className="container">
          <Link to="/" className="brand-logo">Richard Sahrakorpi</Link>
          <ul className="right">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar;
