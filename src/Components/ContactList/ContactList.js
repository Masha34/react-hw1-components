import React, {Fragment, useEffect} from "react"; //useEffect замінить componentDidMounth()
import {connect} from "react-redux";
import { updateDatabase } from "../../Services/api-service";
import ContactItem from "./ContactItem.js/contactItem";
import { getAllContacts } from "../../Actions/ContactListActions";

// const ContactList = ({List, onStatusChange, onDelete, onEdit }) => {
const ContactList = ({List, getAllContacts }) => {
    // console.log("ContactList ", List);
    useEffect(() => {
        // updateDatabase()
        updateDatabase().then(data => { //відловлюємо нашу відповідь з api-services
            // console.log("data ===>>", data);
            getAllContacts(data);
        })
    // }, [])
    })
    const item = List.map(contact => {
         return(
             <ContactItem Id={contact.Id} key={contact.Id} Avatar={contact.Avatar} Name={contact.Name} Created={contact.Created} Role={contact.Role} Status={contact.Status} Email={contact.Email} Gender={contact.Gender} />
         )
    })
    return(
        <Fragment>

        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="main-box clearfix">
                        <div className="table-responsive">
                            <table className="table user-list">
                                <thead>
                                    <tr>
                                        <th><span>User</span></th>
                                        <th><span>Created</span></th>
                                        <th className="text-center"><span>Status</span></th>
                                        <th><span>Email</span></th>
                                        <th>&nbsp;</th>
                                    </tr>
                                </thead>

                                <tbody>
                                     { item.length > 0 ? item : <h2>Contact list is empty</h2> }
                                </tbody>

                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </Fragment>
    )
}
const mapStateToProps = ({ContactListReducer}) => {
    const { List } = ContactListReducer;
    return { List }
}
const mapDispatchToProps = {
    getAllContacts
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactList);