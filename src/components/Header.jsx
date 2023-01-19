import React from 'react';
import '../css/Header.css';

function Header() {
  return (
    <header>
      <h1>Joey Hetfield</h1>
      <div className="links-header">
        <a href="https://www.linkedin.com/in/joeyhetfield/">LinkedIn</a>
        <a href="https://github.com/JoeyHetfield">GitHub</a>
      </div>
    </header>
  );
}

export default Header;
