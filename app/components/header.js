// JavaScript File


/**
 *
 * header.js
 *
 */
import React from 'react';

class Header extends React.Component {
  render() {
    // Dans tous les cas, afficher
    return <div className="header"> Coffee Machines </div>

  }
}

// Le composant sera accessible avec le nom "Machine"
export default Header;


//ajouter un bouton activer/desactiver pour chaque machine qui change l'état de la machine et stocker ces informations dans le state (nom et status des machines)