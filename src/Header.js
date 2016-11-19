import React, { Component } from 'react';
import logo from './logo.svg';
import './Header.css';
import './ext/bootstrap-4.0.0-alpha.5-dist/css/bootstrap.css';
import './ext/font-awesome-4.7.0/css/font-awesome.css';

class Header extends Component {
    render() {
        return (
            <div className="container-fluid">
                <nav className="navbar navbar-full navbar-fixed-top bg-faded">
                    <button className="navbar-toggler hidden-lg-up" type="button"
                            data-toggle="collapse" data-target="#navbarResponsive"
                            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    </button>
                    <div className="collapse navbar-toggleable-md row" id="navbarResponsive">
                        <a className="navbar-brand" href="#">
                            <span className="header-logo-text">&#8220;artiffy</span>
                        </a>
                        <form className="float-md-left col-md-5 header-form">
                            <div className="input-group">
                                <input className="form-control" type="text" placeholder="ask or search something ..." aria-describedby="basic-addon1" />
                                <span className="input-group-addon header-form-ask-ques-span" id="basic-addon1">
                                    <button className="btn header-form-ask-ques-button" type="button">Unleash</button>
                                </span>
                            </div>
                            <span className="sr-only"></span>
                        </form>
                        <ul className="nav navbar-nav header-ul">
                            <li className="nav-item active">
                                <a className="" href="#">
                                    <i className="fa fa-2x fa-hand-pointer-o header-nav-li-icon" aria-hidden="true"></i>
                                    &nbsp;Answer
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="" href="#">
                                    <i className="fa fa-2x fa-file-text header-nav-li-icon" aria-hidden="true"></i>
                                    &nbsp;&nbsp;Blog
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="btn btn-secondary dropdown-toggle" href="#" id="dropdown123" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown link
                                </a>
                                <div className="dropdown-menu" aria-labelledby="dropdown123">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;