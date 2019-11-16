import React from 'react';

class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">React on Heroku</a>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/about">John Towery</a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navigation;
