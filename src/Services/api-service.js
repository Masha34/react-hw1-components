URL = "https://contact-list-c07e0-default-rtdb.firebaseio.com/List.json";

// async updateDatabase() {
  //   const List = await fetch(this.URL)
  export const updateDatabase = () => {
    // fetch(this.URL)
    const data = fetch(URL)  //тут буде URL без this бо ми не class basic component
    .then(responce => {
      // console.log("update => ", responce)
      return responce.json();
    // }).catch(err => {
    //   return err;
    }).then(data => {
      // console.log("update ", data);
      if (data !== null) {
        // this.setState(() => {
        //   return{
        //     List: data
        //   }
        // })
            return data
      } else {
        return []
      }
      // else {  // можна не писати бо база в нас і так на початку є порожнім
      //   this.setState(() => {
      //     return{
      //       List: []
      //     }
      //   })
      // }
     
    })
    // .catch(err => console.log(err))
    .catch(err => {
        return err
    })
    return data;
  }

  // Add new contact
    export const saveData = (contactList) => {
      console.log("saveData ", contactList)
    const response = fetch(URL, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(contactList), // данные могут быть 'строкой' или {объектом}!
    }).then(response => {
      return response;
      // console.log("saveDate responce =>", response);
    }).catch(err => {
      return err;
    });
    return response
  }

  // onDelete = (Id) => {
  //   const index = this.state.List.findIndex((elem) => elem.Id === Id);
  //   // console.log("Delete index => ", index)
  //   const partOne = this.state.List.slice(0, index); // все від 0 елемента до елемента який нам треба видалити
  //   const pertTwo = this.state.List.slice(index + 1); // все після видаленого елемента
  //   const newList = [...partOne, ...pertTwo]; //викор диструктуризацію
  //   // ... - це спред оператор, тобто м не знаємо точну к-сть параметрів тому пишемо ...
  //   this.setState(() => {
  //     return {
  //       List: newList,
  //     };
  //   });
  //   this.saveData(newList); // видалення з бази даних
  // }