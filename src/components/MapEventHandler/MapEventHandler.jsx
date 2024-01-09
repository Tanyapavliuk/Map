import { useContext, useEffect, useCallback } from 'react';
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

  const map = useMap();

  // Функція, яка оновлює visibleArray
  const updateVisibleArray = useCallback(() => {
    if (map) {
      bounds = map.getBounds();
      const newVisibleArray = [];

      data.forEach(element => {
        if (
          element.properties.lat_y <= bounds._northEast.lat &&
          element.properties.lat_y >= bounds._southWest.lat &&
          element.properties.long_x <= bounds._northEast.lng &&
          element.properties.long_x >= bounds._southWest.lng
        ) {
          const inArray = newVisibleArray.find(
            el => el.properties.id === element.properties.id
          );
          if (!inArray) {
            newVisibleArray.push(element);
          }
        }
      });

      setVisibleDataValue(newVisibleArray);
    }
  }, [map, data, setVisibleDataValue]);

  useEffect(() => {
    // Викликаємо функцію при ініціалізації компонента
    updateVisibleArray();

    const handleMoveEnd = () => {
      // Викликаємо функцію при русі картою
      updateVisibleArray();
    };

    const handleClick = event => {
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
    };

    if (map) {
      map.on('moveend', handleMoveEnd);
      map.on('click', handleClick);
    }

    return () => {
      if (map) {
        map.off('moveend', handleMoveEnd);
        map.off('click', handleClick);
      }
    };
  }, [
    map,
    data,
    setDataValue,
    setActivePointValue,
    setClickPointValue,
    setVisibleDataValue,
    updateVisibleArray,
  ]);

  return null;
};
