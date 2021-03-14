import React, {Fragment, Component} from "react";

import ReactDOM from "react-dom";
import "./index.css";

//Router
import {
  BrowserRouter as Router, // Router буде псевдонімом до BrowserRouter
  Switch,  // компоненнт з бібліотеки react-router-dom
  Route,   // компоненнт з бібліотеки react-router-dom
} from "react-router-dom";

import { v4 as uuidv4 } from 'uuid';
// import App from './App';

import Header from "./Components/Header/header";
import ContactList from "./Components/ContactList/contactList";
import Footer from "./Components/Footer/footer";
import AddContact from "./Components/AddContact/addContact";
import EditContact from "./Components/EditContact/editContact";
import Error404 from "./Components/Error404/error404";

class App extends Component {

  state = {
    List: [
      {
        "Id": uuidv4(),
        // "Avatar": "https://randomuser.me/api/portraits/women/80.jpg",
        "Avatar": "60",
        "Name": "Mila Kunis",
        "Created": "2013/08/08",
        "Role": "Admin",
        "Status": "Active",
        "Email": "mila@kunis.com",
        "Gender": "women"
      },
      {
        "Id": uuidv4(),
        "Avatar": "20",
        "Name": "Camil Jonson",
        "Created": "2013/08/08",
        "Role": "User",
        "Status": "Inactive",
        "Email": "camil@gmail.com",
        "Gender": "men"
      },
      {
        "Id": uuidv4(),
        "Avatar": "50",
        "Name": "Jenifer Daniels",
        "Created": "2013/08/08",
        "Role": "User",
        "Status": "Pending",
        "Email": "mike@ukr.com",
        "Gender": "women"
      },
      {
        "Id": uuidv4(),
        "Avatar": "45",
        "Name": "Tom Wilson",
        "Created": "2013/08/08",
        "Role": "User",
        "Status": "Banned",
        "Email": "mij@ukr.com",
        "Gender": "men"
      }
    ],
    currentContact: ""
  }
  onDelete = (Id) => {
    const index = this.state.List.findIndex((elem) => elem.Id === Id);
    // console.log("Delete index => ", index)
    const partOne = this.state.List.slice(0, index); // все від 0 елемента до елемента який нам треба видалити
    const pertTwo = this.state.List.slice(index + 1); // все після видаленого елемента
    const newList = [...partOne, ...pertTwo]; //викор диструктуризацію
    // ... - це спред оператор, тобто м не знаємо точну к-сть параметрів тому пишемо ...
    this.setState(() => {
      return {
        List: newList,
      };
    });
  }
  onEdit = (Id) => {
    const index = this.state.List.findIndex((elem) => elem.Id === Id);
    const selectedContact = this.state.List[index];
    // console.log("selectedContact => ", selectedContact)
    // const old = this.state.List.slice();
    this.setState(() => {
      return{
        currentContact: selectedContact
      }
    })
  }

  //нижче ще один працюючий метод для видалення
  // onDelete = (Id) => {
  //   const newList = [...this.state.List].filter((elem) => elem.Id !== Id);
  //   this.setState(() => {
  //     return {
  //       List: newList
  //     };
  //   });
  // }

  //нижче ще один працюючий метод для видалення але він не працює
  // onDelete = (Id) => {
  //   const index = this.state.List.findIndex((elem) => elem.Id === Id)
  // let newList = this.state.List.slice();
  // delete newList[index];
  //   this.setState(() => {
  //     return {
  //       List: newList
  //     };
  //   });
  // }

  onAddContact = (newContact) => {
    // console.log("onAddContact ", newContact)
    const tmpList = this.state.List.slice();
    const newList = [...tmpList, newContact];
    // console.log("newList => ", newList);
    this.setState(() => {
      return {
        List: newList
      }
    })
  }

  onEditCurrentContact =( newContact ) => {
    // console.log("newContact => ", newContact)
    const { Id } = newContact;
    const index = this.state.List.findIndex((elem) => elem.Id === Id);
    const partOne = this.state.List.slice(0, index); 
    const pertTwo = this.state.List.slice(index + 1); 
    const newList = [...partOne, newContact, ...pertTwo]; //викор диструктуризацію
    this.setState(() => {
      return{
        List: newList
      };
    })
  }
  onStatusChange = (Id) => {
        // console.log("onStatusChange", Id);
        // console.log("onStatusChange", this);
        const index = this.state.List.findIndex((elem) => elem.Id === Id);
        // console.log("Index = ", index)
        let newList = this.state.List.slice();
        // console.log("before newList ", newList[index].Status);
        // console.log(this.state.List[index].Status);
          if (newList[index].Status === "Inactive"){
            newList[index].Status = "Active"
          }
          else if (newList[index].Status === "Active"){
            newList[index].Status = "Pending"
          }
          else if (newList[index].Status === "Pending"){
            newList[index].Status = "Banned"
          }
          else if (newList[index].Status === "Banned"){
            newList[index].Status = "Inactive"
          }
     
          // console.log("after newList ", newList[index].Status);

          this.setState(() => {
            return{
            List: newList
            }
          })



        // if (this.state.List[index].Status === "Inactive"){
        //   this.setState({
        //     Status: "Active"
        //   })
        // }
  }


  render(){
    const { List, currentContact } = this.state;
    // console.log("App state => ", this.state);
    return(
      <Fragment> 
          <Router>
          <Header />  
            <Switch>
              {/* <ContactList List={List} onStatusChange={this.onStatusChange} onDelete={this.onDelete} /> */}
              <Route path="/" exact render={() => <ContactList List={List} onStatusChange={this.onStatusChange} onDelete={this.onDelete} onEdit={this.onEdit} />} />
              <Route path="/add-contact" exact render={() => <AddContact onAddContact={this.onAddContact} /> } />
              <Route path="/editContact" exact render={() => <EditContact currentContact={currentContact} onEditCurrentContact={this.onEditCurrentContact} /> } />
              {/* <Route render={() => <Error404 /> } /> */}
              <Route component ={Error404} /> 
            </Switch>
            <Footer />
          </Router>
      </Fragment> 
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
