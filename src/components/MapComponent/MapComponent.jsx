import L from 'leaflet';
import { MapContainer, TileLayer } from 'react-leaflet';
import { GeojsonLayer } from 'components/GeojsonLayer';
import { MapEventHandler } from 'components/MapEventHandler';
import { Temporary } from 'components/Temporary';

L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.5.0/dist/images/';

export const MapComponent = () => {
  const centerPosition = [50.4501, 30.5234];

  return (
    <MapContainer
      style={{ height: '500px', width: '700px' }}
      center={centerPosition}
      zoom={6}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC"
      />
      <MapEventHandler />
      <GeojsonLayer url={'geoLocation.json'} />
      <Temporary />
    </MapContainer>
  );
};
