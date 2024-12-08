import Map from './Map';

const BusinessItem = ({ business }) => {
    const lat = parseFloat(business.latitude);
    const lng = parseFloat(business.longitude);

    return (
    <div className="business-item">
        <h3>{business.doing_business_as_name || 'No Name Provided'}</h3>
        <p><strong>Type:</strong> {business.license_description}</p>
        <p><strong>Address:</strong> {business.address || 'No Address Provided'}</p>

        {/* Render Map if Coordinates are Available */}
      {lat && lng ? (
        <Map lat={lat} lng={lng} />
      ) : (
        <p><strong>Location:</strong> Coordinates not available</p>
      )}

    </div>
    ); };
  
  export default BusinessItem;
  