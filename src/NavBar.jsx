// import React from 'react';
import PropTypes from 'prop-types'

const NavBar = ({ navigate }) => {
  return (
    <div>
      <div className="navbar">
        <div className="header">
          <div className="logo">
            <a href="#">NAME</a> 
          </div>
          <nav>
            <ul className="nav-items">
              <li onClick={() => navigate('home')}>HOME</li>
              <li onClick={() => navigate('about')}>ABOUT</li>
              <li onClick={() => navigate('contact')}>CONTACT</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

NavBar.propTypes = {
    navigate: PropTypes.func.isRequired,
}

export default NavBar
