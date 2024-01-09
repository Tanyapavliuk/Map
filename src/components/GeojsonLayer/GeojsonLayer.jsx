import { useContext, useEffect, useRef } from 'react';
import { Icon } from 'leaflet';
import { Marker, Popup, FeatureGroup } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

import icon from '../../assets/icon.png';
import { ActivePointContext, DataContext, VisibleDataContext } from 'Providers';

const customIcon = new Icon({
  iconUrl: icon,
  iconSize: [38, 38],
});

var fetchData = function fetchData(url, options) {
  let request = fetch(url, options);

  return request.then(r => r.json()).then(data => data.features);
};

export const GeojsonLayer = ({ url }) => {
  const { data } = useContext(DataContext);
  const { setActivePointValue } = useContext(ActivePointContext);
  const { setVisibleDataValue: setVisibleDataValueContext } =
    useContext(VisibleDataContext);

  // Використовуємо useRef для створення постійних посилань на функції
  const setDataValueRef = useRef();
  setDataValueRef.current = useContext(DataContext).setDataValue;

  const setVisibleDataValueRef = useRef();
  setVisibleDataValueRef.current = setVisibleDataValueContext;

  useEffect(() => {
    if (url) {
      const abortController = new AbortController();

      fetchData(url, { signal: abortController.signal }).then(data => {
        setDataValueRef.current(data);
        setVisibleDataValueRef.current(data);
      });

      return () => {
        abortController.abort();
      };
    }
  }, [url]);

  return (
    <FeatureGroup>
      <MarkerClusterGroup chunkedLoading>
        {data.map((f, index) => (
          <Marker
            key={index}
            position={f.geometry.coordinates}
            icon={customIcon}
            eventHandlers={{
              click: () => {
                setActivePointValue(f.properties.id);
              },
            }}
          >
            <Popup minWidth={100} closeButton={false}>
              <div>
                <p>{f.properties.name}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </FeatureGroup>
  );
};
