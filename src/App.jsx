import React, { useState, useEffect } from 'react';
import Chennai from './App_chennai';
import Bangalore from './App_bangalore';
import Mumbai from './App_Mumbai';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import Navbar from './travel_deals';
import './search.css';

function App() {
  const [city, setCity] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const options = [
    { name: 'Email', link: 'mailto:contact@example.com' },
    { name: 'Phone', link: 'tel:+1234567890' },
    { name: 'Live Chat', link: 'https://example.com/livechat' },
  ];

  const handleSearch = (searchValue) => {
    setCity(searchValue.toLowerCase());
  };

  const getCityFromCoordinates = async () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;
          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              const city = data.address.city || data.address.town || data.address.village || '';
              resolve(city);
            })
            .catch((error) => {
              reject(error);
            });
        });
      } else {
        reject(new Error('Geolocation is not supported by this browser'));
      }
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const city = await getCityFromCoordinates();
    if (city.toLowerCase() === 'potheri') {
      setCity('chennai');
    } else if (city.toLowerCase() === 'bangalore') {
      setCity('bangalore');
    } else if (city.toLowerCase() === 'mumbai') {
      setCity('mumbai');
    } else {
      alert('Sorry, we do not have any deals for your location');
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (link) => {
    window.location.href = link;
  };

  useEffect(() => {
    const cityParam = new URLSearchParams(window.location.search).get('city');
    if (cityParam) {
      setCity(cityParam.toLowerCase());
    }
  }, []);

  let appComponent;
  
  if (city === 'chennai') {
    appComponent = <Chennai city={city} />;
  } else if (city === 'bangalore') {
    appComponent = <Bangalore city={city} />;
  } else if (city === 'mumbai') {
    appComponent = <Mumbai city={city} />;
  } else {
    appComponent = (
      <div>   
        <nav>
          <ul class="u">
            <li class="i">
              <a href="/">Home</a>
            </li>
            <li class="i">
              <a href="/about">About</a>
            </li>
            <li class="i">
            <Link to='/travel_deals'>Travel Deals</Link>
            </li>

            <li class="i" className="dropdown">
              <a href="#" onClick={toggleDropdown}>
                Contact Us!
              </a>
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  {options.map(option => (
                    <li key={option.name}>
                      <a href="#" onClick={() => handleOptionClick(option.link)}>
                        {option.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
        </nav>
   
      <h1>Search for a city</h1>
      <h2>
        <form onSubmit={handleSubmit}>
          <button type="submit">Use your live location to browse awesome deals</button>
        </form>
      </h2>
      <input type="text" placeholder="Enter a city name" onChange={(e) => handleSearch(e.target.value)} />
      <ul>
        <h2>Popular Searches</h2>
        <li><a href="?city=chennai">Chennai</a></li>
        <li><a href="?city=bangalore">Bangalore</a></li>
        <li><a href="?city=mumbai">Mumbai</a></li>
      </ul>
      <h3>
        <a href="/travel_deals">Looking for something else? Browse Travel Deals Instead</a>     
       </h3>
       
    </div>
  );
}

return <div className="App">{appComponent}</div>;
}

export default App;
       
