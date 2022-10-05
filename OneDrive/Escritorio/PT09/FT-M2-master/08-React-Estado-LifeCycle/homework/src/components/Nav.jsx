import React from 'react';
import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import '../App';

function Nav({onSearch}) {
  return (
    <div >
      <img src={Logo} alt="not found"/>
      <span>Henry - Weather Map</span>
      <SearchBar onSearch={onSearch}/>
    </div>
   );
};

export default Nav;
