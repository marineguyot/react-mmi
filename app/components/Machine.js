/**
 *
 * App.js
 *
 */
import React from 'react';

class Machine extends React.Component {
  render() {
    // Dans tous les cas, afficher
    return (
      <div className="machine">
      {this.props.name} | {this.props.isActivate} 
      </div>
    
      )
  }
}



// Le composant sera accessible avec le nom "Machine"
export default Machine;

