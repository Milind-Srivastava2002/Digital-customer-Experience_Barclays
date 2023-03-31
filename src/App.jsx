import React, { useState } from 'react';
import Chennai from './App_chennai';
import Bangalore from './App_bangalore';
import Mumbai from './App_Mumbai';
import './search.css';

function App() {
  const [city, setCity] = useState('');

  const handleSearch = (searchValue) => {
    setCity(searchValue);
  };

  let appComponent;

  if (city === 'Chennai') {
    appComponent = <Chennai city={city} />;
  } else if (city === 'Bangalore') {
    appComponent = <Bangalore city={city} />;
  } else if (city === 'Mumbai') {
    appComponent = <Mumbai city={city} />;
  } else {
    appComponent = (
      <div>
        <h1>Search for a city</h1>
        <input type="text" placeholder="Enter a city name" onChange={(e) => handleSearch(e.target.value)} />
        <ul>
        <h2>Popular Searches</h2>
          <li><a href="#" onClick={() => handleSearch("Chennai")}>Chennai</a></li>
          <li><a href="#" onClick={() => handleSearch("Bangalore")}>Bangalore</a></li>
          <li><a href="#" onClick={() => handleSearch("Mumbai")}>Mumbai</a></li>
        </ul>
        <h1>
            <p><a href="https://web.whatsapp.com/" target='_blank'>Use your live location to browse awesome deals</a></p>
        </h1>
       
      </div>
    );
  }

  return <div className="App">{appComponent}</div>;
}

export default App;