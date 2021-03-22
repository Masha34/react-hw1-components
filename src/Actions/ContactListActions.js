
import contactList from "../Components/ContactList/contactList"

export const getAllContacts = (contactList) => {
    return {
        type: "CONTACT_LIST_LOADED",
        payload: contactList   //contactList записується в payload
    }
}
