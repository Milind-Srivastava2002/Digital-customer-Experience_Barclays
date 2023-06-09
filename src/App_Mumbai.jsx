import React, { useState } from 'react';
import './city_mumbai.css';

function Bangalore(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { city } = props;
  const options = [
    { name: 'R City', link: 'https://www.whatsapp.com' },
    { name: 'Phoenix Market City', link: 'https://www.whatsapp.com' },
    { name: 'Inorbit', link: 'https://www.inorbit.in/vashi/offers/' },
    { name: 'Raguleela', link: 'https://www.whatsapp.com' },
    { name: 'Oberoi Mall', link: 'https://www.oberoimall.com/sale-and-offers-in-mumbai.php' },
    { name: 'Infiniti Mall', link: 'https://www.whatsapp.com' },
    { name: 'Grand Central Seawoods', link: 'https://www.whatsapp.com' },
  ];
  const options10 = [
    '10% off on Adidas @Phoneix Market City',
    '13% Cashback on HDFC Credit Cards on all footwear',
    '50% off on Bata @all Outlets using HDFC Debit cards',
    '15% off on Skechers at Garuda Mall',
    '20% off on Nike shoes at LuLu Mall',
    '25% Cashback on HDFC Debit Cards at BrroFiled',
    'Flat 30% off on Reebok shoes at Park Square Mall',
    'Buy 1 Get 1 Free on Puma shoes at Nexus Mall',
    'Get up to 50% off on all footwear at Orion Mall',
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const handleOptionClick = (link) => {
    window.location.href = link;
  };

  const [searchTerm10, setSearchTerm10] = useState('');
  const [displayOptions10, setDisplayOptions10] = useState(options10.slice(0, 3));
  const [showAll10, setShowAll10] = useState(false);
  const handleSearch10 = (event) => {
    setSearchTerm10(event.target.value);
    setDisplayOptions10(
      options10
        .filter((option) =>
          option.toLowerCase().includes(event.target.value.toLowerCase())
        )
        .slice(0, 2)
    );
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [displayOptions, setDisplayOptions] = useState(options.slice(0, 3));
  const [showAll, setShowAll] = useState(false);
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setDisplayOptions(
      options
        .filter((option) =>
          option.name.toLowerCase().includes(event.target.value.toLowerCase())
        )
        .slice(0, 2)
    );
  };

  return (
    <div className="App">
      <nav>
        <ul class="u">
          <li class="i">
            <a href="/">Home</a>
          </li>
          <li class="i">
            <a href="#">About</a>
          </li>
          <li class="i">
            <a href="/travel_deals">Travel deals</a>
          </li>
          <li className="dropdown">
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
  <h1>{city}</h1>

  <div className="options10">
    <h2>Hey Milind, Looking for some shoes, here are some of the deals you must check out!</h2>
    <div className="search-container">
      <input type="text" placeholder="Search..." value={searchTerm10} onChange={handleSearch10} />
      <button>Search</button>
    </div>
    <div className="options10-list">
      <ul>
        {displayOptions10.map((option, index) => (
          <li key={index}>
            <a href={`#${option}`}>{option}</a>
          </li>
        ))}
      </ul>
    </div>
    {options10.length > displayOptions10.length && (
      <div className="show-more">
        <button onClick={() => setShowAll10(!showAll10)}>
          {showAll10 ? 'Show Less' : 'Show More'}
        </button>
      </div>
    )}
  </div>

  <div className="options">
    <div className="search-container">
      <input type="text" placeholder="Search..." value={searchTerm} onChange={handleSearch} />
      <button>Search</button>
    </div>
    <div className="options-list">
      <ul>
        {displayOptions.map(option => (
          <li key={option.name}>
            <a href={option.link}>{option.name}</a>
          </li>
        ))}
      </ul>
    </div>
    {options.length > displayOptions.length && (
      <div className="show-more">
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    )}
  </div>
</div>
);
}

export default Bangalore;
