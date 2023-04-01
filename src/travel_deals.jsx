import React, { useState } from 'react';
import './Navbar_style.css';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const options = [
    { name: 'Email', link: 'mailto:support@website.com' },
    { name: 'Phone', link: 'tel:1800-123-4567' },
    { name: 'Chat', link: 'https://website.com/chat' },
  ];

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleOptionClick = (link) => {
    window.location.href = link;
  };

  return (
    <div>
        <nav>
            <ul>
            <li>
            <a href="http://localhost:3000">Home</a>
            </li>
            <li>
            <a href="#">About</a>
            </li>
            <li className="dropdown">
            <a href="#" onClick={toggleDropdown}>
                Contact Us!
            </a>
            {dropdownOpen && (
                <ul className="dropdown-menu">
                {options.map((option) => (
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
        <body>
                <li>
                    <a href="https://www.makemytrip.com/offers/">Make My Trip</a>
                </li>
                <li>
                <a href="https://www.easemytrip.com/deals.html">Ease My Trip</a>
                </li>
                <li>
                <a href="https://www.yatra.com/">Yatra.com</a>
                </li>
           
        
        </body>
            
    </div>
   
  );
}

export default Navbar;
