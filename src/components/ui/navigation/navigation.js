import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = ({ links }) => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {
          links.map(({ label, path }) => {
            return (
              <li key={path}>
                <NavLink
                  className="navigation__link"
                  activeClassName="navigation__link--active"
                  to={path}
                  exact
                >{label}</NavLink>
              </li>
            );
          })
        }
      </ul>
    </nav>
  );
};

export default Navigation;
