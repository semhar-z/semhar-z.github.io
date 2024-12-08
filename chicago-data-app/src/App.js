import React from 'react';
import BusinessList from './Component/BusinessList';
import './styles.css';

const App = () => {
  return (
    <div>
      <h1>Chicago Businesses</h1>
      <div className="container">
        <BusinessList />
      </div>
    </div>
  );
};

export default App;
