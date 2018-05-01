// JavaScript File

 import React from "react";
 import { BrowserRouter as Router, Route, Link } from "react-router-dom";
 
 const Map = () => (
   <Router>
     <div>
       <ul>
         <li>
          <Link to="/machine1">Machine cafe</Link>
         </li>
         <li>
         <Link to="/machine2">Machine the</Link>
         </li>
         <li>
         <Link to="/machine3">Machine frappucino</Link>
         </li>
          <li>
          <Link to="/machine4">Machine citron</Link>
         </li>
       </ul>
       <hr />
 
 
       <Route exact path="/machine1" component={M1} />
       <Route path="/machine2" component={M2} />
       <Route path="/machine3" component={M3} />
       <Route path="/machine4" component={M4} />
     </div>
   </Router>
 );
 
 const M1 = () => (
     
     <div class="local">
    <h2>Localisation de la machine a cafe</h2>
    </div>
 );
 
 const M2 = () => (
     
     <div class="local">
    <h2>Localisation de la machine a the</h2>
   </div>
 );
 
 const M3 = () => (
     <div class="local">
    <h2>Localisation de la machine a frappucino</h2>
   </div>
 );
 const M4 = () => (
     <div class="local">
    <h2 >Localisation de la machine a citron</h2>
   </div>
 );
 
 export default Map;