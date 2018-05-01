/**
 *
 * App.js
 *
 */
import React from 'react';

// On importe ici les composants qu'on veut afficher
import Machine from '../../components/Machine.js';
import Header from '../../components/header.js';
import Footer from '../../components/footer.js';
import '../../css/style.css';
import Switch from 'react-toggle-switch';
// On peut aussi importer du CSS de la meme facon.


 class App extends React.Component {
   constructor(props) {
     super(props);
 
     this.handleStatusChange = this.handleStatusChange.bind(this);
 
     this.state = {
       machines: [
         {
           id: 0,
           name: "Machine à café",
           isActive: true
         },
         {
           id: 1,
           name: "Machine à thé",
           isActive: false
         },
         {
           id: 2,
           name: "Machine à frappucino",
           isActive: true
         },
         {
           id: 3,
           name: "Machine à citron",
           isActive: true
         }
       ]
     };
   }
 

  // Méthode pour inverser le status d'une machine
   handleStatusChange(key) {
     // 1. On copie le state existant
     const machines = { ...this.state.machines };
     // 2. On modifie le status de CETTE machine

    machines[key].isActive = !machines[key].isActive;
     // Pour vérifier la nouvelle collection dans la console :
    console.log(machines[key]);
 
     // 3. On applique cette nouvelle collection au state
     this.setState({ machines });
   }
 
   render() {
     
      const machinesIds = Object.keys(this.state.machines);
    const totalActive = machinesIds.reduce((prevTotal, key) => {
      const machine = this.state.machines[key];
      const isAvailable = machine && machine.isActive;
      // On incrémente le compteur à chaque fois que l'on trouve une machine active
      return isAvailable ? prevTotal + 1 : prevTotal
    }, 0);
    const total = machinesIds.length;
     
     
     
     
     return (
       <div className="main">
         <Header/>
           {/*Conteneur de notre liste*/}
           <div className="counter">
           <strong>{totalActive}</strong> / <strong>{total}</strong> Machines actives
          </div>
          <div className="machines-list">
             {/*Boucle sur notre collection de machines*/}
             {
               Object
                 .keys(this.state.machines)
                 .map(key =>
                 // Le composant Machine s'affichera autant de fois
                 // qu'il y a d'objets dans la collection.
                 <Machine name={this.state.machines[key].name}
                          key={this.state.machines[key].id}
                          index={this.state.machines[key].id}
                          handleStatusChange={this.handleStatusChange}
                          isActive={this.state.machines[key].isActive}/>
               )}
           </div>
         <Footer/>
       </div>
     );
   }
 }
 
 export default App;
