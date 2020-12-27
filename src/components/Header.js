import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      {/* Logo */}
      <div className="header__logo">u-FREIGHT-ease</div>

      {/* Search Input */}
      <div className="header__search">
        <input className="header__searchInput" type="text" />
      </div>

      {/* Nav */}
      <div className="header__nav">
        <div className="header__option">
          <span className="optionLineOne">Hello, Guest</span>
          <span className="optionLineTwo">Sign In</span>
        </div>

        <div className="header__option">
          <span className="optionLineOne">Returns</span>
          <span className="optionLineTwo">& Orders</span>
        </div>

        <div className="header__option">
          <span className="optionLineOne">Your</span>
          <span className="optionLineTwo">Prime</span>
        </div>

        <div className="header__option"></div>
      </div>
    </div>
  );
}

export default Header;
