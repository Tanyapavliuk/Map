export const fillingForm = (
  data,
  name,
  description,
  imageUrl,
  latitude,
  longitude
) => {
  const index = String(data.length + 1);
  return {
    type: 'Feature',
    properties: {
      id: index,
      scalerank: 2,
      name: name,
      description: description,
      image: imageUrl
        ? imageUrl
        : 'https://city-house.com.ua/city_h/wp-content/uploads/2017/10/EHnergosberegayushchij-karkasnyj-dom-iz-SIP-panelej-pod-klyuch-za-60-dnej-1.png',
      lat_y: latitude,
      long_x: longitude,
      featureclass: 'waterfall',
    },
    geometry: {
      type: 'Point',
      coordinates: [latitude, longitude],
    },
  };
};
