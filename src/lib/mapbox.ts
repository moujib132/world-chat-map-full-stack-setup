
// Mapbox configuration placeholder
export const mapboxConfig = {
  accessToken: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN || 'pk.demo.token',
  style: 'mapbox://styles/mapbox/streets-v12',
};

export const initializeMapbox = () => {
  console.log('Mapbox initialized with token:', mapboxConfig.accessToken);
};