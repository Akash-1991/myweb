import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';
import './ext/bootstrap-4.0.0-alpha.5-dist/css/bootstrap.css';

class Header extends Component {
    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-full navbar-fixed-top navbar-dark bg-inverse Navbar-custom">
                    <button className="navbar-toggler hidden-lg-up" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"></button>
                    <div className="collapse navbar-toggleable-md" id="navbarResponsive">
                        <a className="navbar-brand" href="#">
                            <img src={logo} className="Header-logo" alt="logo" />
                        </a>
                        <ul className="nav navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                        </ul>
                        <form className="form-inline float-lg-right">
                            <input className="form-control" type="text" placeHolder="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;