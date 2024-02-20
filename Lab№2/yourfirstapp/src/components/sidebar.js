import React from 'react';
import './style/sidebar.css';
import Menu from './menu'

const SideBar = ({ menuList }) => {
  return (
    <div className="sidenav">
      <Menu list={menuList} />
    </div>
  );
};

export default SideBar;
