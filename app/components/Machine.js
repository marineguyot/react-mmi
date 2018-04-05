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

  toggleSwitch = () => {
    this.setState(prevState => {
      return {
        switched: !prevState.switched
      };
    });
  };
 
  render() {
    // Dans tous les cas, afficher
    return  (
    
    <div className="machine" className= { this.state.isActive ? "machine active" : "machine" }>
    
        { this.props.name }  { this.props.isActive }
        <Switch onClick={this.toggleSwitch} on={this.state.switched}/>
        <h4>{ this.state.switched ? "Activée" : "Désactivée" }</h4>
    </div>
    
    );
  }

}
export default Machine;