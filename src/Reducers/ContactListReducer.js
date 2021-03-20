const initialState = {
    List: []
}

const ContactListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CONTACT_LIST_LOADED":  //контакт ліст з бази
            return {
                List: action.payload
            }
        default:
            return state;
    }
}

export default ContactListReducer;