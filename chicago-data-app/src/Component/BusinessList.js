import { useState, useEffect } from 'react';
import BusinessItem from './BusinessItem';

const BusinessList = () => {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(''); // search query
  const [businessType, setBusinessType] = useState(''); // Selected business type
  const [businessTypes, setBusinessTypes] = useState([]); // Available business types
  const [error, setError] = useState(null); // error state

  useEffect(() => {
    fetch('https://data.cityofchicago.org/resource/uupf-x98q.json')
      .then(response => response.json())
      .then(data => {
 
         // Extract unique business types for the dropdown
         setBusinesses(data);
         const types = [...new Set(data.map((b) => b.license_description).filter(Boolean))];
         setBusinessTypes(types);
         setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setError('Failed to fetch business data. Please try again later.');
        setLoading(false);
      });
  }, []);

   // Handle search input change
   const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

   // Handle business type selection
   const handleTypeChange = (event) => {
    setBusinessType(event.target.value);
   };

  // Filter businesses based on search query and selected business type

  const filteredBusinesses = businesses.filter((business) => {
    const matchesSearch = business.doing_business_as_name
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesType =
      !businessType || business.license_description === businessType;
    return matchesSearch && matchesType;
  });
 

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  const handleClear = () => {
    setSearchQuery('');
    setBusinessType('');
  };
  

return (
    <div>
      {/* Search Input */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by business name..."
          value={searchQuery}
          onChange={handleSearchChange}
        />

          {/* Business Type Dropdown */}
          <select
          value={businessType}
          onChange={handleTypeChange}
       
        >
          <option value="">All Business Types</option>
          {businessTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
     
       {/* Clear Button */}
       <button
        onClick={handleClear}
       >
        Clear
      </button>
    </div>

      {/* Render filtered businesses */}
      <div>
        {filteredBusinesses.length > 0 ? (
          filteredBusinesses.map((business, index) => (
            <BusinessItem key={index} business={business} />
          ))
        ) : (
          <div>No businesses found.</div>
        )}
      </div>
    </div>
  );

};

export default BusinessList;
