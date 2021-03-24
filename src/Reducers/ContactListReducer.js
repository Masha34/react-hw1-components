const initialState = {
    List: []
}

const ContactListReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CONTACT_LIST_LOADED":  //контакт ліст з бази
            return {
                List: action.payload
            }
        case "ADD_NEW_CONTACT":  
            return {
                List: [
                    ...state.List,
                    action.payload
                ]
                // List: action.payload
            }
        case "DELETE_CONTACT":  
            return {
                List: action.payload
            }
        default:
            return state;
    }
}

export default ContactListReducer;