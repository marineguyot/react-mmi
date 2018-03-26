import React from 'react';

class App extends React.Component {
   constructor(props) {
      super(props);
      
      this.state = {
         isActive: false
      }
      this.updateState = this.updateState.bind(this);
   };
   updateState() {
      this.setState({isActive: true})
   }
   render() {
      return (
         <div>
            <button onClick = {this.updateState}>Changer de statut</button>
            <h4>{this.state.isActive}</h4>

         </div>
      );
   }
}
export default App;