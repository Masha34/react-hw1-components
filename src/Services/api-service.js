// URL = "https://contact-list-c07e0-default-rtdb.firebaseio.com/List.json";

// // async updateDatabase() {
//   //   const List = await fetch(this.URL)
//   updateDatabase = () => {
//     fetch(this.URL)
//     .then(responce => {
//       // console.log("update => ", responce)
//       return responce.json();
//     // }).catch(err => {
//     //   return err;
//     }).then(data => {
//       // console.log("update ", data);
//       if (data !== null) {
//         this.setState(() => {
//           return{
//             List: data
//           }
//         })
//       }
//       // else {  // можна не писати бо база в нас і так на початку є порожнім
//       //   this.setState(() => {
//       //     return{
//       //       List: []
//       //     }
//       //   })
//       // }
     
//     })
//     .catch(err => console.log(err))
//   }
