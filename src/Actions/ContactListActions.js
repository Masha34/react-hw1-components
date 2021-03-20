import ContactList from "../Components/ContactList/contactList"

export const getAllContacts = (contactList) => {
    return {
        type: "CONTACT_LIST_LOADED",
        payload: contactList
    }
}