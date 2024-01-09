import { useContext, useEffect } from 'react';
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
  let visibleArray = [];

  const map = useMap();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (map) {
      map.on('moveend', () => {
        bounds = map.getBounds();

        data.forEach(element => {
          if (
            element.properties.lat_y <= bounds._northEast.lat &&
            element.properties.lat_y >= bounds._southWest.lat &&
            element.properties.long_x <= bounds._northEast.lng &&
            element.properties.long_x >= bounds._southWest.lng
          ) {
            const inArray = visibleArray.find(
              el => el.properties.id === element.properties.id
            );
            if (!inArray) {
              visibleArray.push(element);
              setVisibleDataValue(visibleArray);
            }
          }
        });
      });
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

    return () => {
      if (map) {
        map.off('moveend');
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
