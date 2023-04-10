import React, { useState } from 'react';
// import './Menu.css';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu">
      <button className="menu__icon" onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
      </button>
      <ul className={`menu__list ${isOpen ? 'menu__list--open' : ''}`}>
        <li className="menu__item">
          <a href="#">Home</a>
        </li>
        <li className="menu__item">
          <a href="#">About</a>
        </li>
        <li className="menu__item">
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;