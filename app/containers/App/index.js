/**
 *
 * App.js
 *
 */
import React from 'react';

// On importe ici les composants qu'on veut afficher
import Machine from '../../components/Machine.js';
// On peut aussi importer du CSS de la meme facon.
import '../../css/style.css';
import Header from '../../components/header.js';
import Footer from '../../components/footer.js';



export default function App() {
  return (
    // Un return doit retourner un seul élément du DOM
    // Si on veut afficher plusieurs éléments adjacents,
    // On devra donc les encapsuler dans une DIV parente.
    <div>
    
    <Header/>
    <Machine name="machine 1" isActivate="yes"/>
    <Machine name="machine 2" isActivate="yes"/>
    <Machine name="machine 3" isActivate="yes"/>

    <Footer/>
    </div>
  );
}
