import React from 'react'
import { connect } from 'react-redux';

import { deleteContact } from '../actions';

import './styles.css'

function Details({ selectedContact, deleteContact }) {
    const handleDeleteContact = () => {
        if (selectedContact) deleteContact(selectedContact.id)
    };

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {selectedContact && <tr>
                        <td>
                            {JSON.stringify(selectedContact)}
                        </td>
                    </tr>}
                </tbody>
            </table>
            <button onClick={handleDeleteContact}>
                Delete
            </button>
        </>
    )
};

const mapStateToProps = state => {
    return {
        selectedContact: state.selectedContact,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        deleteContact: (id) => dispatch(deleteContact(id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
