import React from 'react'
import { connect } from 'react-redux';

import Details from './Details';
import { addName, getDetails } from '../actions';
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
            props.addName(contact);
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
                        {props.names.map((name, index) => {
                            return (
                                <tr key={index}>
                                    <td className="row" onClick={() => props.getDetails(name)}>
                                        {name.name}
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
        names: state.names,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addName: name => dispatch(addName(name)),
        getDetails: contact => dispatch(getDetails(contact)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
