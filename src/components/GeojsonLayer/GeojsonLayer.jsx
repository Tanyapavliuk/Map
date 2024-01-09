import { useContext, useEffect, useCallback } from 'react';
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
  const { data, setDataValue } = useContext(DataContext);
  const { setVisibleDataValue } = useContext(VisibleDataContext);
  const { setActivePointValue } = useContext(ActivePointContext);

  const updateDataAndVisibleData = useCallback(
    async abortController => {
      try {
        const fetchedData = await fetchData(url, {
          signal: abortController.signal,
        });
        setDataValue(fetchedData);
        setVisibleDataValue(fetchedData);
      } catch (error) {}
    },
    [url, setDataValue, setVisibleDataValue]
  );

  useEffect(() => {
    const abortController = new AbortController();
    updateDataAndVisibleData(abortController);

    return () => {
      abortController.abort();
    };
  }, [url, updateDataAndVisibleData]);

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
