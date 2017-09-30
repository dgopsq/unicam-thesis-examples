import React from 'react';

const Navbar = (props) => (
  <div className="c-navbar">
    <div className="c-navbar__logo">
      {props.children}
    </div>
  </div>
);

export default Navbar;