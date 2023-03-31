import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      history.push(`/${searchTerm.toLowerCase()}`);
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <form onSubmit={handleSearch}>
            <input type="text" placeholder="Search city" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <button type="submit">Search</button>
          </form>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
