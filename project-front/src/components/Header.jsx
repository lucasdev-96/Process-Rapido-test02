import React from 'react';
import PropTypes from 'prop-types';
import { BiBarChartAlt } from 'react-icons/bi';
import { IoLogoReddit } from 'react-icons/io';
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import '../styles/header.css';

function Header({ width }) {
  return (
    <header>
      <div className="header">
        <IoLogoReddit style={{ fontSize: '50px' }} className="icons" />
        <nav className="links">
          <a href="home">HOME</a>
          <a href="home">PAGES</a>
          <a href="home">PORTFOLIOS</a>
          <a href="home">HEADERS</a>
          <a href="home">ELEMENTS</a>
          <a href="home">BLOGS</a>

        </nav>
        { width <= 768 ? null : (
          <div>
            <AiOutlineSearch className="icons" />
            <AiOutlineShoppingCart className="icons" />
            <BiBarChartAlt className="icons" />
          </div>
        )}
      </div>
    </header>
  );
}

Header.propTypes = {
  width: PropTypes.number.isRequired,
};

export default Header;
