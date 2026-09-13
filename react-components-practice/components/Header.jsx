import React from 'react';

function Header({ title, navLinks = [], onMenuClick }) {
  return (
    <header className="header">
      <h1 className="header-title">{title}</h1>
      <button className="header-menu-btn" onClick={onMenuClick}>☰</button>
      <nav className="header-nav">
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;