import React, { useState } from 'react';
import './city_mumbai.css';


function Bangalore(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { city } = props;
  const options = [
    'LuLu Mall',
    'Phoneix Market City',
    'Brookfield',
    'Nexus Mall',
    'Bangalore Central',
    'Park Sqaure Mall',
    'Orion Mall',
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  }
  const handleHomeClick = () => {
    props.setCity('');
  };
  
  return (
    <div className="App">
      <nav>
        <ul>
          <li><a href="http://localhost:51548">Home</a></li>
          <li><a href="#">About</a></li>
          
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

export default Bangalore;
