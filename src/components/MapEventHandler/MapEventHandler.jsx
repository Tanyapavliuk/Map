import { useContext, useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';
import {
  ActivePointContext,
  ClickPoint,
  DataContext,
  VisibleDataContext,
} from 'Providers';

let bounds = null;

export const MapEventHandler = () => {
  const { data, setDataValue } = useContext(DataContext);
  const { setVisibleDataValue } = useContext(VisibleDataContext);
  const { setActivePointValue } = useContext(ActivePointContext);
  const { setClickPointValue } = useContext(ClickPoint);

  // Використовуємо useRef для створення постійних посилань на стан
  const visibleArrayRef = useRef([]);
  const map = useMap();

  useEffect(() => {
    const updateVisibleArray = () => {
      if (map) {
        bounds = map.getBounds();

        const newVisibleArray = data.filter(
          element =>
            element.properties.lat_y <= bounds._northEast.lat &&
            element.properties.lat_y >= bounds._southWest.lat &&
            element.properties.long_x <= bounds._northEast.lng &&
            element.properties.long_x >= bounds._southWest.lng
        );

        setVisibleDataValue(newVisibleArray);
        visibleArrayRef.current = newVisibleArray;
      }
    };

    if (map) {
      map.on('moveend', updateVisibleArray);
    }

    map.on('click', event => {
      const { lat, lng } = event.latlng;

      setClickPointValue(lat, lng);
      const clickedMarker = data.some(
        marker =>
          Math.abs(marker.geometry.coordinates[0] - lat) < 0.0001 &&
          Math.abs(marker.geometry.coordinates[1] - lng) < 0.0001
      );

      if (!clickedMarker) {
        setActivePointValue(null);
      }
    });

    updateVisibleArray();

    return () => {
      if (map) {
        map.off('moveend', updateVisibleArray);
        map.off('click');
      }
    };
  }, [
    map,
    data,
    setDataValue,
    setActivePointValue,
    setClickPointValue,
    setVisibleDataValue,
  ]);

  return null;
};
