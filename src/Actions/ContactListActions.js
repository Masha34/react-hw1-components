
import contactList from "../Components/ContactList/contactList"

export const getAllContacts = (contactList) => {
    return {
        type: "CONTACT_LIST_LOADED",
        payload: contactList   //contactList записується в payload
    }
}
export const addNewContact = (contactList) => {
    return {
        type: "ADD_NEW_CONTACT",
        payload: contactList  
    }
}
export const deleteContact = (contactList) => {
    return {
        type: "DELETE_CONTACT",
        payload: contactList  
    }
}