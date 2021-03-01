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
// import App from './App';

import Header from "./Components/Header/header";
import Search from "./Components/Search/search";
import ContactList from "./Components/ContactList/contactList";
import ContactItem from "./Components/ContactList/ContactItem.js/contactItem";
import Footer from "./Components/Footer/footer";

class App extends Component {

  state = {
    List: [
      {
        "Avatar": "https://www.bootdey.com/img/Content/avatar/avatar3.png",
        "Name": "Mila Kunis",
        "Created": "2013/08/08",
        "Role": "Admin",
        "Status": "Active",
        "Email": "mila@kunis.com"
      },
      {
        "Avatar": "https://www.bootdey.com/img/Content/avatar/avatar1.png",
        "Name": "Camil Jonson",
        "Created": "2013/08/08",
        "Role": "User",
        "Status": "Inactive",
        "Email": "camil@gmail.com"
      },
      {
        "Avatar": "https://www.bootdey.com/img/Content/avatar/avatar2.png",
        "Name": "Mike Daniels",
        "Created": "2013/08/08",
        "Role": "User",
        "Status": "Active",
        "Email": "mike@ukr.com"
      }
    ]
  }
  render(){
    const {List} = this.state;
    return(
      <Fragment>
          <Header />
          <Search />
          <ContactList List={List} />
          <Footer />
      </Fragment>
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));