/**
 *
 * App.js
 *
 */
import React from 'react';
import {render} from 'react-dom';
import Switch from 'react-toggle-switch'

class Machine extends React.Component {
    
  constructor(props) {
      super(props);
    this.state = {
      switched: false
    };
  }

 
  render() {
    // Dans tous les cas, afficher
    return  (
    
    <div className="machine" className= { this.state.isActive ? "machine active" : "machine" }>
    
        { this.props.name }  { this.props.isActive }
        <Switch onClick={this.props.toggleSwitch} on={this.props.isActive}/>
        <h4>{ this.state.switched ? "Activée" : "Désactivée" }</h4>
    </div>
    
    );
  }

}
export default Machine;