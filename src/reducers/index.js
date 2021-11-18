const initialState = {
    names: [],
    selectedContact: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NAME': {
            return {
                ...state,
                names: [...state.names, action.payload],
            }
        }
        case 'GET_DETAILS': {
            return {
                ...state,
                selectedContact: action.payload,
            };
        }
        case 'DELETE_CONTACT': {
            return {
                ...state,
                names: state.names.filter(name => name.id !== action.payload),
                selectedContact: null,
            };
        }
        default: {
            return state;
        }
    }
};

export default reducer;