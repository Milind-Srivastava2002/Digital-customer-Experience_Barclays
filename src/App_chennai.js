import React, { useState } from 'react';
import './city_mumbai.css';


function Chennai(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { city } = props;
  const options = [
    'Phoneix Market City',
    'Express Avenue',
    'VR Chennai',
    'Nexus Vijaya',
    'Grand square',
    'Grand Galada',
    'Palladium',
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }

  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Nearest Malls</a></li>
          <li className="dropdown">
            <a href="#" onClick={toggleDropdown}>Credit Scoring</a>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                {options.map(option => (
                  <li key={option}>{option}</li>
                ))}
              </ul>
            )}
          </li>
        </ul>
      </nav>
      <h1>{city}</h1>
      <ul>
        {options.map(option => (
          <li key={option}><a href={`#${option}`}>{option}</a></li>
        ))}
      </ul>
    </div>
  );
}

export default Chennai;
