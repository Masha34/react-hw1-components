import React, { Fragment} from "react";
import { v4 as uuidv4 } from 'uuid';
import { Redirect } from "react-router-dom";
import "./addContact.css";
import { saveData } from "../../Services/api-service";
import { connect } from "react-redux";


class AddContact extends React.Component {

    state = {
            "Avatar": 1,  //щоб була картинка по defoult
            "Name": "",
            "Created": "",
            "Role": "",
            "Status": "",
            "Email": "",
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
    addNewContact = (event) => {
        event.preventDefault();
        console.log("addNewContact");
        const { Avatar, Name, Role, Status, Email, Gender } = this.state;
        let Created = Date.now();
        const Id = uuidv4();
        // Створимо новий обєкт
        const newContact = { Id, Avatar, Name, Role, Status, Email, Gender, Created };
        // console.log("newContact = ", newContact)

        // const { onAddContact } = this.props;
        const { List } = this.props;
        
        
        List.push(newContact)
        // onAddContact(newContact);
        saveData(List);
        this.setState({
            isRedirect: true
        })
    }
    
    render(){   
        // console.log("This props ", this.props)
        // const { Name } = this.props;
        const { Name, Gender, Avatar, isRedirect } = this.state;
        if (isRedirect) {     // (isRedirect)-це озн true; (!isRedirect)-це озн false, не true
            return (
                <Redirect to="/" />
            )
        }
        const URL = `https://randomuser.me/api/portraits/${Gender}/${Avatar}.jpg`;
        // console.log(Name)
        // console.log("State ", this.state)
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
                                                src={URL} alt="Contact" />
                                            </div>
                                            {/* <h3 className="m0 text-bold">Audrey Hunt</h3> */}
                                            { Name.length > 0 ? Name : <h3 className="m0 text-bold">Audrey Hunt</h3> }
                                            <div className="mv-lg">
                                                <p>Hello, I'm a just a dummy contact in your contact list and this is my
                                                    presentation text. Have fun!</p>
                                            </div>
        
                                        </div>
                                    </div>
                                    {/* <div className="panel panel-default hidden-xs hidden-sm">
                                        <div className="panel-heading">
                                            <div className="panel-title text-center">Recent contacts</div>
                                        </div>
                                        <div className="panel-body">
                                            <div className="media">
                                                <div className="media-left media-middle">
                                                    <a href="#"><img
                                                        className="media-object img-circle img-thumbnail thumb48"
                                                        src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                        alt="Contact" /></a>
                                                </div>
                                                <div className="media-body pt-sm">
                                                    <div className="text-bold">Floyd Ortiz
                                                        <div className="text-sm text-muted">12m ago</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media">
                                                <div className="media-left media-middle">
                                                    <a href="#"><img
                                                        className="media-object img-circle img-thumbnail thumb48"
                                                        src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                        alt="Contact" /></a>
                                                </div>
                                                <div className="media-body pt-sm">
                                                    <div className="text-bold">Luis Vasquez
                                                        <div className="text-sm text-muted">2h ago</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media">
                                                <div className="media-left media-middle">
                                                    <a href="#"><img
                                                        className="media-object img-circle img-thumbnail thumb48"
                                                        src="https://bootdey.com/img/Content/avatar/avatar4.png"
                                                        alt="Contact" /></a>
                                                </div>
                                                <div className="media-body pt-sm">
                                                    <div className="text-bold">Duane Mckinney
                                                        <div className="text-sm text-muted">yesterday</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="media">
                                                <div className="media-left media-middle">
                                                    <a href="#"><img
                                                        className="media-object img-circle img-thumbnail thumb48"
                                                        src="https://bootdey.com/img/Content/avatar/avatar5.png"
                                                        alt="Contact" /></a>
                                                </div>
                                                <div className="media-body pt-sm">
                                                    <div className="text-bold">Connie Lambert
                                                        <div className="text-sm text-muted">2 weeks ago</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="col-md-8">
                                    <div className="panel panel-default">
                                        <div className="panel-body">
                                            <div className="pull-right">
                                            </div>
                                            <div className="h4 text-center">Contact Information</div>
                                            <div className="row pv-lg">
                                                <div className="col-lg-2"></div>
                                                <div className="col-lg-8">
                                                    <form onSubmit={this.addNewContact} className="form-horizontal ng-pristine ng-valid">
                                                        <div className="form-group">
                                                            <label className="col-sm-2 control-label"
                                                                htmlFor="avatar">Avatar</label>
                                                            <div className="col-sm-10">
                                                                <input onChange={this.getAvatar} className="form-control" id="avatar"
                                                                    type="number" min="1" max="99" placeholder="Avatar" name='avatar' />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-sm-2 control-label"
                                                                htmlFor="inputContact1">Name</label>
                                                            <div className="col-sm-10">
                                                                <input onChange={this.getName} className="form-control" id="inputContact1"
                                                                    type="text" placeholder="Name" name='name' />
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
                                                                    type="text" placeholder="Role" name='role' />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-sm-2 control-label"
                                                                htmlFor="inputContact4">Status</label>
                                                            <div className="col-sm-10">
                                                                <input onChange={this.getStatus} className="form-control" id="inputContact4"
                                                                    type="text" placeholder="Status" />
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="col-sm-2 control-label"
                                                                htmlFor="inputContact2">Email</label>
                                                            <div className="col-sm-10">
                                                                <input onChange={this.getEmail} className="form-control" id="inputContact2"
                                                                    type="email" placeholder="Email" name='email' />
                                                            </div>
                                                        </div>
                                                        {/* <div className="form-group">
                                                            <label className="col-sm-2 control-label"
                                                                htmlFor="inputContact5">Gender</label>
                                                            <div className="col-sm-10">
                                                                <input className="form-control" id="inputContact5"
                                                                    type="text" />
                                                            </div>
                                                        </div> */}
                                                        {/* <div className="form-group">
                                                            <label className="col-sm-2 control-label"
                                                                htmlFor="inputContact6">Address</label>
                                                            <div className="col-sm-10">
                                                                <textarea className="form-control" id="inputContact6"
                                                                        row="4"></textarea>
                                                            </div>
                                                        </div> */}
 
                                                        <div className="form-group">
                                                            <div className="col-sm-offset-2 col-sm-10">
                                                                <button className="btn btn-info" type="submit">Add contact
                                                                </button>
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
const mapStateToProps = ({ContactListReducer}) => {
    const { List } = ContactListReducer;
    return { List }
}
export default connect(mapStateToProps)(AddContact);

// Додаткова форма
{/* <Fragment>
            <div className="container">
                <div className="row">
                    <form className="col-lg-12">
                        <label>Avatar</label>
                        <input className="form-control" id="inputContact1" type="text" placeholder="" name="" value="" />
                        <br />
                        <label>Your name</label>
                        <input className="form-control" id="inputContact1" type="text" placeholder="" name="" value="" />
                        <br />
                        <label>Created</label>
                        <input className="form-control" id="inputContact1" type="text" placeholder="" name="" value="" />
                        <br />
                        <label>Role</label>
                        <input className="form-control" id="inputContact1" type="text" placeholder="" name="" value="" />
                        <br />
                        <label>Status</label>
                        <input className="form-control" id="inputContact1" type="text" placeholder="" name="" value="" />
                        <br />
                        <label>Email</label>
                        <input className="form-control" id="inputContact1" type="text" placeholder="" name="" value="" />
                        <br />
                        <label>Gender</label>
                        <input className="form-control" id="inputContact1" type="text" placeholder="" name="" value="" />
                    </form>
                </div>
            </div>
        </Fragment> */}