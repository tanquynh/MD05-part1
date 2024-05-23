import React from 'react';

function SideBarItem({ icon, text, link }) {
    return (
      <li className="sidebar-list">
      <a className="sidebar-link sidebar-title link-nav" href={link}>
        <i className={icon}></i> <span>{text}</span>
      </a>
    </li>
    );
}

export default SideBarItem;
