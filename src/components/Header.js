import React from 'react';
import './Header.css';

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Header() {
  return (
    <div className="header">
      {/* Header Left */}
      <div className="header__left">
        <div className="header__borderDiv">
          <div className="header__logo">u-FREIGHT-ease</div>
        </div>
        <div className="header__borderDiv">
          <div className="header__sendTo">
            <LocationOnIcon className="header__location" />
            <div className="header__address">
              <span className="header__optionLineOne">Deliver to GUEST</span>
              <span className="header__optionLineTwo">City ZIPCODE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header Center */}
      <div className="header__search">
        <div className="header__searchLeft">
          <span className="header__searchCat">All</span>
          <ArrowDropDownIcon className="header__dropDown" />
        </div>
        <div className="header__searchCenter">
          <input className="header__searchInput" type="text" />
        </div>
        <div className="header__searchRight">
          <SearchIcon className="header__searchIcon" style={{ fontSize: 30 }} />
        </div>
      </div>

      {/* Header Right */}
      <div className="header__nav">
        <div className="header__borderDiv">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </div>

        <div className="header__borderDiv">
          <div className="header__option">
            <span className="header__optionLineOne">Hello, Guest</span>
            <span className="header__optionLineTwo">Sign In</span>
          </div>
        </div>

        <div className="header__borderDiv">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </div>

        <div className="header__borderDiv">
          <div className="header__optionBasket">
            <ShoppingBasket />
            <span className="header__optionLineTwo header__basketCount">0</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
