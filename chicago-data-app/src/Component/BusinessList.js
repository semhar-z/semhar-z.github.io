import { useState, useEffect } from 'react';
import BusinessItem from './BusinessItem';

const BusinessList = () => {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [businessType, setBusinessType] = useState(''); // Selected business type
  const [businessTypes, setBusinessTypes] = useState([]); // Available business types

  useEffect(() => {
    fetch('https://data.cityofchicago.org/resource/uupf-x98q.json')
      .then(response => response.json())
      .then(data => {
        setBusinesses(data);
      

         // Extract unique business types for the dropdown
         const types = [...new Set(data.map((b) => b.license_description).filter(Boolean))];
         setBusinessTypes(types);
         setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
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
//   const filteredBusinesses = businesses.filter((business) =>
//     business.doing_business_as_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//   business.business_type?.toLowerCase().includes(searchQuery.toLowerCase()) || 
//   business.address?.toLowerCase().includes(searchQuery.toLowerCase())

//   );


  

  if (loading) {
    return <div>Loading...</div>;
  }

//   return (
//     <div>
//       {businesses.map((business, index) => (
//         <BusinessItem key={index} business={business} />
//       ))}
//     </div>
//   );

return (
    <div>
      {/* Search Input */}
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by business name..."
          value={searchQuery}
          onChange={handleSearchChange}
          style={{
            padding: '10px',
            width: '300px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            marginRight: '10px',
          }}
        />

          {/* Business Type Dropdown */}
          <select
          value={businessType}
          onChange={handleTypeChange}
          style={{
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
          }}
        >
          <option value="">All Business Types</option>
          {businessTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
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
