import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Menu.css';

const menus = [
    {
        name: 'Home',
        to: '',
        exact: true
    },
    {
        name: 'Articles',
        to: '/articles',
        exact: false
    },
    {
        name: 'Contact',
        to: '/Contact',
        exact: false
    },
    {
        name: 'About',
        to: '/About',
        exact: false
    }

];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                var active = match ? 'active' : '';
                return (
                    <li className={active}>
                        <Link className="nav-link menu-link" to={to}>
                            {label}
                        </Link>
                    </li>
                )
            }}
        />
    )
};

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-light navbar-expand-lg bg-light justify-content-center">
                <button className="navbar-toggler ml-1" type="button" data-toggle="collapse" data-target="#collapsingNavbar2">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse justify-content-between align-items-center w-100" id="collapsingNavbar2">
                    <ul className="navbar-nav mx-auto text-center">
                        {this.showMenus(menus)}
                    </ul>
                </div>
            </nav>

        )
    }

    showMenus = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((menu, index) => {
                return (
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        activeOnlyWhenExact={menu.exact}
                    />
                );
            });
        }
        return result;
    }

}

export default Menu;