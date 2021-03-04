// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React, {Fragment, Component} from "react";

import ReactDOM from "react-dom";
import "./index.css";
import { v4 as uuidv4 } from 'uuid';
// import App from './App';

import Header from "./Components/Header/header";
import Search from "./Components/Search/search";
import ContactList from "./Components/ContactList/contactList";
// import ContactItem from "./Components/ContactList/ContactItem.js/contactItem";
import Footer from "./Components/Footer/footer";

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
    ]
  }

  onStatusChange = (Id) => {
        // console.log("onStatusChange", Id);
        // console.log("onStatusChange", this);
        const index = this.state.List.findIndex((elem) => elem.Id === Id);
        // console.log("Index = ", index)
        let newList = this.state.List.slice();
        console.log("before newList ", newList[index].Status);
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

          
          console.log("after newList ", newList[index].Status);

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
    const {List} = this.state;
    console.log("App state => ", this.state);
    return(
      <Fragment>
          <Header />
          <Search />
          <ContactList List={List} onStatusChange={this.onStatusChange}/>
          <Footer />
      </Fragment>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
