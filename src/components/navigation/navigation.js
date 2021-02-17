import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {
          [
            { label: 'Home', path: '/' },
            { label: 'Discovery', path: '/discovery' },
            { label: 'New Releases', path: '/new-releases' },
            { label: 'In Progress', path: '/in-progress' },
            { label: 'Starred', path: '/starred' }
          ].map(({ label, path }) => {
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
