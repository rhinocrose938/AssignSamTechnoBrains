import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div style={{position: 'relative', width: "100%", top: -8}}>
            <nav className="navbar navbar-expand-md bg-dark navbar-dark">
            <a className="navbar-brand" href="#!">Menu</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
    <li className="nav-item m-2" >      
      <Link to = '/'>Contact List</Link>
    </li>
      
    <div className="dropdown">
             <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                   Sort Alphabetically
             </button>
      <div className="dropdown-menu">
        <li className="nav-item m-2" >     
            <Link to = '/asc'>Contact List A-Z</Link>
        </li>
         <li className="nav-item m-2" >      
             <Link to = '/desc'>Contact List Z-A</Link>
         </li>
       </div>
   </div>
   <li className="nav-item m-2" >      
      <Link to = '/fav'>Favorite List</Link>
    </li>  
  </ul>
  </div>  
</nav> 
</div>
)
}

export default Navbar




