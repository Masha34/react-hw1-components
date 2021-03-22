import React, {Fragment} from "react";

import "./search.css";

// const Search = () => {
class Search extends React.Component {
    getValueSearch = (event) =>{
        const searchTarget = event.target.value;
        const {onSearchContact, onSearchValue} = this.props;
        onSearchValue(searchTarget);
        onSearchContact(searchTarget);
    }

render (){
    return(
        <Fragment>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                     <nav className="navbar navbar-light bg-light">
                         <div className="container-fluid">
                            <div className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" onChange = {this.getValueSearch} aria-label="Search" />
                                 {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                            </div>
                         </div>
                    </nav>
                </div>
             </div>
        </div>
        </Fragment>
    )
}

}
export default Search;
