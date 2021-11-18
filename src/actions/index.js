export const addName = contact => {
    return {
        type: 'ADD_NAME',
        payload: contact,
    }
};

export const getDetails = contact => {
    return {
        type: 'GET_DETAILS',
        payload: contact,
    }
};

export const deleteContact = id => {
    return {
        type: 'DELETE_CONTACT',
        payload: id,
    }
};