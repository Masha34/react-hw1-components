import React, { Fragment} from "react";
// import { v4 as uuidv4 } from 'uuid';
import { Redirect } from "react-router-dom";
import "./editContact.css";

class EditContact extends React.Component {

    state = {
            "Id": this.props.currentContact.Id,
            "Avatar": this.props.currentContact.Avatar,
            "Name": this.props.currentContact.Name,
            "Created": this.props.currentContact.Created,
            "Role": this.props.currentContact.Role,
            "Status": this.props.currentContact.Status,
            "Email": this.props.currentContact.Email,
            "Gender": "women",
            "isRedirect": false
    }
    getName = (event) => {
        // console.log(event)
        // console.log(event.target.value)
        // event.target.value - буде записувати в поле ІМЯ букви
        this.setState({
            Name: event.target.value
        })
    }
    getAvatar = (event) => {
        this.setState({
            Avatar: event.target.value
        })
    }
    getRole = (event) => {
        this.setState({
            Role: event.target.value
        })
    }
    getStatus = (event) => {
        this.setState({
            Status: event.target.value
        })
    }
    getEmail = (event) => {
        this.setState({
            Email: event.target.value
        })
    }
    editContact = (event) => {
        event.preventDefault();
        // console.log("editContact");
        const { Id, Avatar, Name, Created, Role, Status, Email, Gender } = this.state;
       
        // Створимо новий обєкт
        const newContact = { Id, Avatar, Name, Created, Role, Status, Email, Gender };
        // console.log("newContact = ", newContact)

        const { onEditCurrentContact } = this.props;
        onEditCurrentContact(newContact);
        this.setState({
            isRedirect: true
        })
    }
    
    render(){  
        // console.log("this.props => ", this.props) 
        const { Avatar, Name, Created, Role, Status, Email, Gender, isRedirect } = this.state;
        const URL = `https://randomuser.me/api/portraits/${Gender}/${Avatar}.jpg`;
        if (isRedirect) {     // (isRedirect)-це озн true; (!isRedirect)-це озн false, не true
            return (
                <Redirect to="/" />
            )
        }
    
        return(
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="container bootstrap snippets bootdey">
                            <div className="row ng-scope">
                                <div className="col-md-4">
                                    <div className="panel panel-default">
                                        <div className="panel-body text-center">
                                            <div className="pv-lg"><img
                                                // className="center-block img-responsive img-circle img-thumbnail thumb96"
                                                // src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Contact" />
                                                className="center-block img-responsive img-circle img-thumbnail thumb96"
                                                src= { URL } alt="Contact" />
                                            </div>
                                            {/* <h3 className="m0 text-bold">Audrey Hunt</h3> */}
                                            { Name.length > 0 ? Name : <h3 className="m0 text-bold">Audrey Hunt</h3> }
                                            <div className="mv-lg">
                                                <p>Hello, I'm a just a dummy contact in your contact list and this is my
                                                    presentation text. Have fun!</p>
                                            </div>
        
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="panel panel-default">
                                        <div className="panel-body">
                                            <div className="pull-right">
                                            </div>
                                            <div className="h4 text-center">Edit Contact</div>
                                            <div className="row pv-lg">
                                                <div className="col-lg-2"></div>
                                                <div className="col-lg-8">
                                                    <form onSubmit={this.editContact} className="form-horizontal ng-pristine ng-valid">
                                                        <div className="form-group">
                                                            <label className="col-sm-2 control-label"
                                                                htmlFor="avatar">Avatar</label>
                                                            <div className="col-sm-10">
                                                                <input onChange={this.getAvatar} className="form-control" id="avatar"
                                                                    type="number" min="1" max="99" placeholder={ Avatar } name='avatar' />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-sm-2 control-label"
                                                                htmlFor="inputContact1">Name</label>
                                                            <div className="col-sm-10">
                                                                <input onChange={this.getName} className="form-control" id="inputContact1"
                                                                    type="text" placeholder={ Name } name='name' />
                                                                {/* <input onChange={this.getName} className="form-control" id="inputContact1"
                                                                    type="text" placeholder="" name='name' value={this.state.Name} />
                                                                    value ми не будемо викор бо ми не міняємо state зараз */}
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-sm-2 control-label"
                                                                htmlFor="inputContact3">Role</label>
                                                            <div className="col-sm-10">
                                                                <input onChange={this.getRole} className="form-control" id="inputContact3"
                                                                    type="text" placeholder={Role} name='role' />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-sm-2 control-label"
                                                                htmlFor="inputContact4">Status</label>
                                                            <div className="col-sm-10">
                                                                <input onChange={this.getStatus} className="form-control" id="inputContact4"
                                                                    type="text" placeholder={Status} />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-sm-2 control-label"
                                                                htmlFor="inputContact2">Email</label>
                                                            <div className="col-sm-10">
                                                                <input onChange={this.getEmail} className="form-control" id="inputContact2"
                                                                    type="email" placeholder={Email} name='email' />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <div className="col-sm-offset-2 col-sm-10">
                                                                <button className="btn btn-info" type="submit">Edit contact</button>
                                                            </div>
                                                        </div>
                                                    </form>      
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
            )
    }   
}
export default EditContact;