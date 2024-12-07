import { useState, useEffect } from 'react';
import BusinessItem from './BusinessItem';

const BusinessList = () => {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://data.cityofchicago.org/resource/uupf-x98q.json')
      .then(response => response.json())
      .then(data => {
        setBusinesses(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {businesses.map((business, index) => (
        <BusinessItem key={index} business={business} />
      ))}
    </div>
  );
};

export default BusinessList;
