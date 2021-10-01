import React from 'react';
import { bubble as Menu } from 'react-burger-menu';
import PropTypes from 'prop-types';
import { BiBarChartAlt } from 'react-icons/bi';
import { IoLogoReddit } from 'react-icons/io';
import { AiOutlineShoppingCart, AiOutlineSearch } from 'react-icons/ai';
import '../styles/header.css';

function Header({ width }) {
  const links = () => (
    <>
      <a href="#home">HOME</a>
      <a href="#home">PAGES</a>
      <a href="#home">PORTFOLIOS</a>
      <a href="#home">HEADERS</a>
      <a href="#home">ELEMENTS</a>
      <a href="#home">BLOGS</a>
    </>
  );

  const linksMobile = () => (
    <Menu className="btn_burguer" right>
      {links()}
    </Menu>
  );

  return (
    <header>
      <div className="header">
        {width <= 768 ? null : <IoLogoReddit style={{ fontSize: '50px' }} className="icons" />}
        <nav className="links">
          {width <= 768 ? linksMobile() : links()}
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
