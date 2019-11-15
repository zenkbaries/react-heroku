import React from 'react';
import { useAuth0 } from "../react-auth0-spa";

const Navigation = () => {

    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">React on Heroku</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {/* <li className="nav-item active">
                        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                    </li> */}
                    {/* <li className="nav-item">
                        <a className="nav-link" href="/links">Link</a>
                    </li> */}
                    {/* <li className="nav-item">
                        <a className="nav-link disabled" href="/disable" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li> */}
                </ul>
                {/* <form className="form-inline my-2 my-lg-0 ">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/about">John Towery</a>
                    </li>
                </ul>
            </div>
            <div>
                {!isAuthenticated && (
                    <button
                    className="btn btn-info"
                    onClick={() =>
                        loginWithRedirect({})
                    }
                    >
                    Log in
                    </button>
                )}

                {isAuthenticated && 
                    <button 
                    className="btn btn-info"
                    onClick={
                        () => logout()
                    }>
                        Log out
                    </button>}
            </div>
        </nav>
    );
};


export default Navigation;
