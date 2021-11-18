const initialState = {
    contacts: [],
    selectedContact: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CONTACT': {
            return {
                ...state,
                contacts: [...state.contacts, action.payload],
            }
        }
        case 'GET_CONTACT': {
            return {
                ...state,
                selectedContact: action.payload,
            };
        }
        case 'DELETE_CONTACT': {
            return {
                ...state,
                contacts: state.contacts.filter(name => name.id !== action.payload),
                selectedContact: null,
            };
        }
        default: {
            return state;
        }
    }
};

export default reducer;