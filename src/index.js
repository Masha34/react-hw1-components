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

import React, {Fragment} from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Header from "./Components/Header/Header";
import Search from "./Components/Search/Search";
import ContactList from "./Components/ContactList/ContactList";
import ContactItem from "./Components/ContactList/ContactItem.js/ContactItem";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return(
    <Fragment>
        <Header />
        <Search />
        <ContactList />
        <ContactItem />
        <ContactItem />
        <Footer />
    </Fragment>
  )
}
ReactDOM.render(<App />, document.getElementById("root"));