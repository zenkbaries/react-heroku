import React from 'react';
import { useAuth0 } from "../react-auth0-spa";

const Navigation = () => {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">React on Heroku</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        {isAuthenticated && (
                        <a className="nav-link" href="/about">John Towery</a>
                        )}
                    </li>
                    <li className="nav-item">
                    {!isAuthenticated && (
                        <button
                            className="btn btn-info"
                            onClick={() =>
                                loginWithRedirect({})
                            }>
                            Log in
                        </button>
                    )}
                    {isAuthenticated && (
                        <button 
                            className="btn btn-info"
                            onClick={
                                () => logout()
                            }>
                            Log out
                        </button>
                    )}
                    </li>
                </ul>
            </div>
        </nav>
    );
};


export default Navigation;
