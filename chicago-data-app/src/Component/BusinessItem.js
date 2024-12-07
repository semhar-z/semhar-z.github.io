const BusinessItem = ({ business }) => {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h2>{business.doing_business_as_name}</h2>
      <p><strong>Business Type:</strong> {business.license_description}</p>
      <p><strong>Activity:</strong> {business.business_activity}</p>
      <p><strong>Address:</strong> {business.address}, {business.city}, {business.state}, {business.zip_code}</p>
      <p><strong>License Expiration:</strong> {business.expiration_date}</p>
      <img
        src={`https://via.placeholder.com/150?text=${business.doing_business_as_name}`}
        alt={`${business.doing_business_as_name}`}
        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
      />
    </div>
  );
};

export default BusinessItem;
