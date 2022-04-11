import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarker,
  faCaretDown,
  faSearch,
  faAngleDown,
} from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import logo from '../../../images/zomatoLogo.png';
import profile from '../../../images/mug_2x.avif';
const Header = () => {
  return (
    <>
      <div className="max-width header">
        <img src={logo} alt="zomato-logo" className="header-logo" />

        <div className="header-right">
          <div className="header-location-search-container">
            <div className="location-wrapper">
              <div className="location-icon-name">
                <FontAwesomeIcon
                  icon={faMapMarker}
                  className="absolute-center location-icon"
                />
                <div>Bangalore</div>
              </div>
              <FontAwesomeIcon
                icon={faCaretDown}
                className="absolute-center"
              ></FontAwesomeIcon>
            </div>
            <div className="location-search-seperator"></div>
            <div className="header-searchbar">
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute-center search-icon"
              />
              <input
                type="text"
                placeholder="search for restaurant, cuisine or a dish"
                className="search-input"
              />
            </div>
          </div>
          <div className="profile-wrapper">
            <img src={profile} alt="profile" className="header-profile-image" />
            <span className="header-username">Moulali</span>
            <FontAwesomeIcon
              icon={faAngleDown}
              className="absolute-center profile-options-icon"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
