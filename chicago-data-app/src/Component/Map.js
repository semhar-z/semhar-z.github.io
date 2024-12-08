import { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ lat, lng }) => {
  useEffect(() => {
    const mapId = `map-${lat}-${lng}`;

    // Avoid initializing the map if already done
    if (document.getElementById(mapId)._leaflet_id) return;

    // Create map instance
    const map = L.map(mapId).setView([lat, lng], 13);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    // Add marker
    L.marker([lat, lng]).addTo(map);

    // Clean up map instance on unmount
    return () => {
      map.remove();
    };
  }, [lat, lng]);

  return <div id={`map-${lat}-${lng}`} style={{ height: '200px', margin: '10px 0' }}></div>;
};

export default Map;
