import { useEffect, useState } from "react";
import { geoCodingAPIKey } from "../../secrets";

async function getCityCountry(lat, lon) {
  const apiKey = geoCodingAPIKey;
  const response = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${apiKey}`
  );
  const data = await response.json();
  const result = data.results[0].components;
  return result;
}

// -------------------- hook
export default function useLocation() {
  const [location, setLocation] = useState({
    loadStatus: 1,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getCityCountry(position.coords.latitude, position.coords.longitude).then(
        (cityCountry) => {
          setLocation({
            ...cityCountry,
            loadStatus: 2,
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
        }
      );
    });
  }, []);
  return location;
}
