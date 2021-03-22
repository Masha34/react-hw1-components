// import React, {Fragment, Component} from "react";
import React, {Component} from "react";

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

//REDUX store
import store from "./store";
import { Provider } from "react-redux";

class App extends Component { 

  URL = "https://contact-list-c07e0-default-rtdb.firebaseio.com/List.json"; //переносимо в api-service

  state = {
    // List: [
    //   {
    //     "Id": uuidv4(),
    //     // "Avatar": "https://randomuser.me/api/portraits/women/80.jpg",
    //     "Avatar": "60",
    //     "Name": "Mila Kunis",
    //     "Created": "2013/08/08",
    //     "Role": "Admin",
    //     "Status": "Active",
    //     "Email": "mila@kunis.com",
    //     "Gender": "women"
    //   },
    //   {
    //     "Id": uuidv4(),
    //     "Avatar": "20",
    //     "Name": "Camil Jonson",
    //     "Created": "2013/08/08",
    //     "Role": "User",
    //     "Status": "Inactive",
    //     "Email": "camil@gmail.com",
    //     "Gender": "men"
    //   }
    // ],
    List: [],
    currentContact: null,
    searchList: [],
    valueSearch: ''
  }
  
  componentDidMount(){
    this.updateDatabase();
  }
 

  // async updateDatabase() {
    //   const List = await fetch(this.URL)
    updateDatabase = () => {
      fetch(this.URL)
      .then(responce => {
        // console.log("update => ", responce)
        return responce.json();
      // }).catch(err => {
      //   return err;
      }).then(data => {
        // console.log("update ", data);
        if (data !== null) {
          this.setState(() => {
            return{
              List: data
            }
          })
        }
        // else {  // можна не писати бо база в нас і так на початку є порожнім
        //   this.setState(() => {
        //     return{
        //       List: []
        //     }
        //   })
        // }
       
      })
      .catch(err => console.log(err))
    }
  
  saveData = (contactList) => {
    fetch(this.URL, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactList), // данные могут быть 'строкой' или {объектом}!
    }).then(response => {
      // console.log("saveDate responce =>", response);
    }).catch(err => console.log(err))
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
    this.saveData(newList); // видалення з бази даних
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
    this.saveData(newList)
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

  onSearchContact = (valueSearch) => {
    const newList = this.state.List.slice();
    const searchContactList = [];
    for(let i = 0; i < newList.length; i++){
      if(newList[i].Name.toLowerCase().includes(valueSearch)){
        searchContactList.push(newList[i]);
      }
    }
    this.setState(() => {
      return {
        searchList: searchContactList
      }
    })
  }

  onSearchValue = (searchTarget) => {
    this.setState(() => {
      return {
        valueSearch: searchTarget
      }
    })
  }

  render(){
    // const { List, currentContact } = this.state;
    // console.log("App state => ", this.state);
    const { List, searchList, currentContact, valueSearch } = this.state;
    return(
      <Provider store={store}> 
          <Router>
          <Header onSearchContact={this.onSearchContact} onSearchValue = {this.onSearchValue} /> 
            <Switch>
              {/* <ContactList List={List} onStatusChange={this.onStatusChange} onDelete={this.onDelete} /> */}
              {/* <Route path="/" exact render={() => <ContactList List={List} onStatusChange={this.onStatusChange} onDelete={this.onDelete} onEdit={this.onEdit} />} /> */}
              <Route path="/" exact render={() => <ContactList List={valueSearch===''?List:searchList.length>0?searchList:searchList} onStatusChange={this.onStatusChange} onDelete={this.onDelete} onEdit={this.onEdit} />} />
              <Route path="/add-contact" exact render={() => <AddContact onAddContact={this.onAddContact} /> } />
              <Route path="/editContact" exact render={() => <EditContact currentContact={currentContact} onEditCurrentContact={this.onEditCurrentContact} /> } />
              {/* <Route render={() => <Error404 /> } /> */}
              <Route component ={Error404} /> 
            </Switch>
            <Footer />
          </Router>
      </Provider> 
    )
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
