import React, { useState } from 'react';
import './city_mumbai.css';

function Mumbai(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { city } = props;
  const options = [
    'R City',
    'Phoneix Market City',
    'Inorbit',
    'Raguleela',
    'Oberoi Mall',
    'Infiniti Mall',
    'Grand Central- Seawoods',
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }

  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href="http://localhost:51548">Home</a></li>
          <li><a href="#">About</a></li>
          
          <li className="dropdown">
            <a href="#" onClick={toggleDropdown}>Reward Points</a>
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

export default Mumbai;
