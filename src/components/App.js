import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import '../css/pure-min.css';
import '../css/grids-responsive-min.css';
import '../css/App.css';

const NAV_ITEMS = [
    { name: "About", link: "/", local: true },
    { name: "Projects", link: "/projects", local: true },
    { name: "Articles", link: "/articles", local: true },
    { name: "GitHub", link: "https://www.github.com/AmberThrall", local: false },
    { name: "Email", link: "mailto:amber@thrall.me", local: false },
];


class App extends React.Component {
    render() {
        const nav = NAV_ITEMS.map((item, id) => {
            return (
                <li className="pure-menu-item" key={id}>
                    { item.local ? <NavLink className="pure-menu-link" to={item.link}>{item.name}</NavLink> : <a className="pure-menu-link" href={item.link} target="_blank">{item.name}</a> }
                </li>
            );
        });

        return (
            <div className="container pure-g">
                <div className="pure-u-1 pure-u-lg-1">
                    <div className="navigation pure-menu pure-menu-horizontal">
                        <ul className="pure-menu-list">
                            {nav}
                        </ul>
                    </div>
                </div>

                <div className="pure-u-1 pure-u-lg-1">
                    <Outlet />
                </div>

                <div className="footer pure-u-1 pure-u-lg-1">
                    © { (new Date()).getFullYear() } Amber Thrall. All Rights Reserved.
                </div>
            </div>
        );
    }
}

export default App;
