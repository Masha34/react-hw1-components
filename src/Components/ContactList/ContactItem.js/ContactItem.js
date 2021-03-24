import React from "react";
import { Link } from "react-router-dom";
import "./contactItem.css";
import { connect } from "react-redux";
import { deleteContact } from "../../../Actions/ContactListActions";
import {Redirect} from "react-router-dom";
import {saveData} from "../../../Services/api-service";

class ContactItem extends React.Component {

    onDeleteContact = () => {
        const { List, deleteContact } = this.props;
        const contact = this.props;
        const newList = List.filter((contact_item) => {
            return contact_item.Id !== contact.Id;
        });
        deleteContact(newList);
        saveData(newList).then(() => {
            this.setState({
                List: newList,
                isRedirect: true
            })
        }) 
    }

    // componentDidMount(){
    //     console.log("componentDidMount");
    // }
    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("nextProps => ", nextProps);
    //     console.log("nextState => ", nextState);
    //     if (nextProps.Status === "Active"){
    //         console.log("Active");
    //         return false  //кажемо не оновлюй компонент
    //     }
    //     else {
    //         return true;
    //     }
    //     // if (nextProps.Status === "Active"){
    //     //     console.log("Active");
    //     //     return true;
    //     // }
    // }
    // componentDidUpdate(){
    //     console.log("componentDidUpdate");
    // }
    // componentWillUnmount(){
    //     console.log("componentWillUnmount");
    // }

//нижче це локальний state
    // state ={
    //     //буде приходити з props
    //     "Avatar": this.props.Avatar,
    //     "Name": this.props.Name,
    //     "Created": this.props.Created,
    //     "Role": this.props.Role,
    //     "Status": this.props.Status,
    //     "Email": this.props.Email,
    //     "Gender": this.props.Gender
    // }


    // onStatusChange = () => {
    //     // console.log("onStatusChange", this);
    //     // console.log("onStatusChange", this.state);
    //     // console.log("onStatusChange", this.state.Status);
    //      if (this.state.Status === "Inactive"){
    //          this.setState({
    //              "Status": "Active"
    //          })
    //      }
    //      else if (this.state.Status === "Active"){
    //          this.setState({
    //              "Status": "Pending"
    //          })
    //      }
    //      else if (this.state.Status === "Pending"){
    //          this.setState({
    //              "Status": "Banned"
    //          })
    //      }
    //      else if (this.state.Status === "Banned"){
    //          this.setState({
    //              "Status": "Inactive"
    //          })
    //      }
    // }

    render(){
        // console.log("contactItems Props =>", this.props)
        // const { onStatusChange, onDelete, onEdit } = this.props;
        const { onStatusChange, onEdit } = this.props;
        // const { Avatar, Name, Created, Role, Status, Email, Gender} = this.state;
        const { Avatar, Name, Created, Role, Status, Email, Gender} = this.props;
        const URL = `https://randomuser.me/api/portraits/${Gender}/${Avatar}.jpg`;
        let statusStyle = "badge bg-secondary status";
        // if (Status === "Active") {
        //     statusStyle = "badge bg-success";
        // }
        // else if (Status === "Banned") {
        //     statusStyle = "badge bg-danger";
        // }
        // else if (Status === "Pending") {
        //     statusStyle = "badge bg-warning"
        // }
        switch(Status) {
            case "Active": statusStyle = "badge bg-success status"; break;
            case "Inctive": statusStyle = "badge bg-secondary status"; break;
            case "Banned": statusStyle = "badge bg-danger status"; break;
            case "Pending": statusStyle = "badge bg-warning status"; break;
        }
        return(
            <tr>
                <td>
                    <img src={URL} alt="" />
                    <a href="#" className="user-link">{Name}</a>
                    <span className="user-subhead">{Role}</span>
                </td>
                <td>
                    {Created}
                </td>
                <td className="text-center">
                    {/* <span className="label label-default">{Status}</span> */}
                    {/* <span className="badge bg-secondary">{Status}</span> */}
                    <span className={statusStyle} onClick={onStatusChange} >{Status}</span>
                </td>
                <td>
                    <a href="#">{Email}</a>
                </td>
                <td>
                    <a href="#" className="table-link">
                        <span className="fa-stack">
                            <i className="fa fa-square fa-stack-2x"></i>
                            <i className="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                    <Link to="/editContact" onClick={onEdit} className="table-link">
                        <span className="fa-stack">
                            <i className="fa fa-square fa-stack-2x"></i>
                            <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                        </span>
                    </Link>
                    {/* <a href="#" onClick={onDelete} className="table-link danger"> */}
                    <a href="#" onClick={this.onDeleteContact} className="table-link danger">
                        <span className="fa-stack">
                            <i className="fa fa-square fa-stack-2x"></i>
                            {/* <i className="fa fa-trash-o fa-stack-1x fa-inverse" onClick={onDelete}></i> */}
                            <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                        </span>
                    </a>
                </td>
            </tr>
)
    }
    
}
const mapStateToProps = ({ContactListReducer}) => {
    const { List } = ContactListReducer;
    return { List }
}
const mapDispatchToProps = {
    deleteContact
}
export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
