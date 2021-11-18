export const addContact = contact => {
    return {
        type: 'ADD_CONTACT',
        payload: contact,
    }
};

export const getContact = contact => {
    return {
        type: 'GET_CONTACT',
        payload: contact,
    }
};

export const deleteContact = id => {
    return {
        type: 'DELETE_CONTACT',
        payload: id,
    }
};