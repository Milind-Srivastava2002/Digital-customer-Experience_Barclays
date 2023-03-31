import React from 'react';
import ReactDOM from 'react-dom/client';
import Chennai from './App_chennai';
import Bangalore from './App_bangalore';
import Mumbai from './App_Mumbai';

const city = 'Mumbai';

let appComponent;

if (city === 'Chennai') {
  appComponent = <Chennai city={city} />;
} else if (city === 'Bangalore') {
  appComponent = <Bangalore city={city} />;
} else if (city === 'Mumbai') {
  appComponent = <Mumbai city={city} />;
} else {
  appComponent = <div>Unknown city: {city}</div>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {appComponent}
  </React.StrictMode>
);
