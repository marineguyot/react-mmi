import React from 'react';

// On importe ici les composants qu'on veut afficher
import Machine from '../../components/Machine.js';
import Header from '../../components/header.js';
import Footer from '../../components/footer.js';
import Toggle from '../../components/toggle.js';
import ReactDOM from 'react-dom';

// On peut aussi importer du CSS de la meme facon.
import '../../css/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      machines: [ 
      { key: 0,
        name: "Machine 1",
        isActive: true
      },
      { key: 1,
        name: "Machine 2",
        isActive: false
      },
     { key: 2,
       name: "Machine 3",
        isActive: false
      },
 
       ]
    };
      console.log(this.state);
      console.log(Object.keys(this.state.machines));
  }

  
  render () {
    
    return (
    
      <div>
         <Header/>
         
      {this.state.machines.map(machine => 
        <Machine name={machine.name}
        key={machine.key}
                isActive={machine.isActive}
        />
        )
      }
    <Footer/>
    </div>
      );
}

}
    
  export default App;
    