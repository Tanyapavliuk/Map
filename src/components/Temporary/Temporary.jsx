import { useContext } from 'react';
import { Marker } from 'react-leaflet';
import { Icon } from 'leaflet';

import { ClickPoint } from 'Providers';
import icon from '../../assets/marker-icon.png';

const customIcon = new Icon({
  iconUrl: icon,
  iconSize: [38, 38],
});

export const Temporary = () => {
  const { clickPoint } = useContext(ClickPoint);
  return (
    <>
      {clickPoint.lat !== null && (
        <Marker icon={customIcon} position={[clickPoint.lat, clickPoint.lng]} />
      )}
    </>
  );
};
