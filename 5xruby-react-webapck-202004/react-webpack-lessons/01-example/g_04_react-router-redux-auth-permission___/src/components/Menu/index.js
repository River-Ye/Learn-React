import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.css';

function isNavLinkActive(currentPath) {
  return (match, location) => location.pathname === currentPath;
}

export default function Menu() {
  return (
    <nav>
      <ul className="menu">
        <li className="menu-item"><NavLink isActive={isNavLinkActive('/')} to="/" exact>Home</NavLink></li>
        <li className="menu-item"><NavLink isActive={isNavLinkActive('/video')} to="/video">Videos</NavLink></li>
      </ul>
    </nav>
  );
}
