import React, {Fragment} from "react";

import "./search.css";

const Search = () => {
    return(
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 search-block">
                        <input className="search" type="text" value="Search" />
                        <input className="btn btn-primary search-btn" type="submit" value="Search" />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Search;