import React from 'react';
import './header.css';

function Header() {
    return (
        <div className="page-header">

            <div className="nav-right col-6 pull-right right-header p-0">
                <ul className="nav-menus">
                    <li><span className="header-search"><i className="ri-search-line"></i></span></li>
                    <li><div className="mode"><i className="ri-moon-line"></i></div></li>
                    <li className="profile-nav onhover-dropdown pe-0 me-0">
                        <div className="media profile-media">
                            <img className="user-profile rounded-circle" src="assets/images/users/4.jpg" alt="user" />
                            <div className="user-name-hide media-body">
                                <span>Emay Walter</span>
                                <p className="mb-0 font-roboto">Admin<i className="middle ri-arrow-down-s-line"></i></p>
                            </div>
                        </div>
                        <ul className="profile-dropdown onhover-show-div">
                            <li><a href="all-users.html"><i data-feather="users"></i> <span>Users</span></a></li>
                            <li><a href="order-list.html"><i data-feather="archive"></i> <span>Orders</span></a></li>
                            <li><a href="support-ticket.html"><i data-feather="phone"></i> <span>Supports Tickets</span></a></li>
                            <li><a href="profile-setting.html"><i data-feather="settings"></i> <span>Settings</span></a></li>
                            <li><a data-bs-toggle="modal" data-bs-target="#staticBackdrop" ><i data-feather="log-out"></i> <span>Log out</span></a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
