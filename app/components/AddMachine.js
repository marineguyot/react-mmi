// JavaScript File

import React from 'react';

class AddMachineForm extends React.Component {
    
    render(){
        return (
            //on a passé addMachineToState en props depuis app
            <form onSubmit={(e) => this.props.addMachineToState(e)}>
                <input />
                <select>
                <option value="active">Actif!</option>
                <option value="inactive">Inactif!</option>
                </select>
                <button type="submit">Ajouter une machine</button>
                </form>
                )
            }
            
    }

export default AddMachineForme;