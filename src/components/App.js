import React from 'react'
import { connect } from 'react-redux';

import Details from './Details';
import { addContact, getContact } from '../actions';
import './styles.css'

function App(props) {
    const handleAddContact = () => {
        const name = prompt('Nombre del contacto');
        const email = prompt('Email del contacto');
        if (name && email) {
            const contact = {
                id: Math.round(Math.random() * 100),
                name,
                email,
            }
            props.addContact(contact);
        }
    };

    return (
        <div className="container">
            <div className="left">
                <table>
                    <thead>
                        <tr>
                            <th>Contacts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.contacts.map((contact, index) => {
                            return (
                                <tr key={index}>
                                    <td onClick={() => props.getContact(contact)}>
                                        {contact.name}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <button onClick={handleAddContact}>Add</button>
            </div>
            <div className="right">
                <Details />
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        contacts: state.contacts,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addContact: contact => dispatch(addContact(contact)),
        getContact: contact => dispatch(getContact(contact)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
