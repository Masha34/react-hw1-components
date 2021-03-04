import React, {Fragment} from "react";

import "./header.css";

const Header = () => {
    return(
        <Fragment>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 header-block">
                    <button type="button" className="btn btn-primary"><a className="btn-primary" href="#" role="button">Home</a></button>
                    <button type="button" className="btn btn-success add">Add new contact</button>
                </div>
            </div>
        </div>
        </Fragment>
    )
}
export default Header;