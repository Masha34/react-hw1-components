import React, {Fragment} from "react";

import "./footer.css";

const Footer = () => {
    return(
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 footer-block">
                        <div>
                            <a href="#" className="table">
                                <span className="fa-social">                               
                                <i className="fa fa-facebook-official icon" aria-hidden="true"></i>
                                </span>
                            </a>
                            <a href="#" className="table">
                                <span className="fa-social">
                                <i className="fa fa-instagram icon" aria-hidden="true"></i>
                                </span>
                            </a>
                            <a href="#" className="table">
                                <span className="fa-social">
                                <i className="fa fa-twitter-square icon" aria-hidden="true"></i>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Footer;