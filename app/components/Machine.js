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
      {this.props.name}  {this.props.isActive ? "machine active" : "machine"};
   <button onClick { (e) => this.handleClick(e)} type="button className="btn">
   Toggle 
   </button>
      </div>
    
      )
  }
}



// Le composant sera accessible avec le nom "Machine"
export default Machine;

