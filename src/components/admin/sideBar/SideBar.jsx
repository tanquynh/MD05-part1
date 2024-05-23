import React, { useState } from 'react';
import './sidebar.css';
import SideBarItem from './SideBarItem';

function SideBar() {
    const sidebarItems = [
        { icon: 'fas fa-home', text: 'Dashboard', link: '#' },
        { icon: 'fas fa-store', text: 'Product', link: '#' },
        { icon: 'fas fa-list-alt', text: 'Category', link: '#' },
        { icon: 'fas fa-cogs', text: 'Attributes', link: '#' },
        { icon: 'fas fa-users', text: 'Users', link: '#' },
        { icon: 'fas fa-user-shield', text: 'Roles', link: '#' },
        { icon: 'fas fa-tags', text: 'Media', link: '#' },
        { icon: 'fas fa-archive', text: 'Orders', link: '#' },
        { icon: 'fas fa-globe', text: 'Localization', link: '#' },
        { icon: 'fas fa-tags', text: 'Coupons', link: '#' },
        { icon: 'fas fa-star', text: 'Product Review', link: '#' }
      ];

    return (
        <div className="sidebar-wrapper">
        <div className="logo-icon-wrapper">
          <a href="index.html">
            <p>Fastkart.</p>
          </a>
        </div>
        <nav className="sidebar-main">
          <ul className="sidebar-links">
            {/* Lặp qua mảng các mục và hiển thị */}
            {sidebarItems.map((item, index) => (
              <SideBarItem key={index} icon={item.icon} text={item.text} link={item.link} />
            ))}
          </ul>
        </nav>
      </div>
      );
  
}

export default SideBar;
