import React from 'react';
import Herocarousel from '../components/Herocarousel';
import Featured from '../components/Featured';
import Items from '../components/Items';
import Adds from '../components/Adds';
import Popular from '../components/Popular';
import Itemslist from '../components/Itemslist';
import Bestsales from '../components/Bestsales';
import Properties from '../components/Properties';


const Home = () => {
  return (
    <div className=''>
      <Herocarousel />
      <Featured />
      <Items />
      <Adds />
      <Popular />
      <div className="container justify-content-between align-items-center">
        <Itemslist />
      </div>
      <Bestsales />
      <Properties />    
    </div>
  );
}

export default Home;
