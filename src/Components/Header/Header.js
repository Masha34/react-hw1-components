import React, {Fragment} from "react";

import {Link} from "react-router-dom";

import Search from "../Search/search"

import "./header.css";

const Header = ({onSearchContact, onSearchValue}) => {
    return(
        <Fragment>
        <div className="container">
            <div className="row">
                <div className="col-lg-4 header-block1">
                    <Link to="/" className="navbar-brand">Contact List</Link>
                </div>
                <div className="col-lg-8 header-block2">
                    {/* <button type="button" className="btn btn-primary"><a className="btn-primary" href="#" role="button">Home</a></button>
                    <button type="button" className="btn btn-success add">Add new contact</button>
                    */}
                    {/* <Link to="/" className="nav-link active home-btn" aria-current="page">Home</Link> */}
                    <Link to="/add-contact" className="nav-link add-btm" aria-current="page">Add new contact</Link>
                </div>
            </div>
        </div>
        {/* <Search /> */}
        <Search onSearchContact = {onSearchContact} onSearchValue = {onSearchValue}/>
        </Fragment>
    )
}

export default Header;
{/* <Fragment>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Contact List</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="/add-contact">Add new contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </div>
    </div>
    </div>
    </Fragment> */}