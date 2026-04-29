import { useEffect, useState } from "react";

const useGeolocation = () => {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(
    !navigator.geolocation
      ? "Geolocation is not supported by your browser"
      : null,
  );

  useEffect(() => {
    if (!navigator.geolocation) {
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          accuracy: pos.coords.accuracy,
        });
        setError(null);
      },
      (err) => {
        setError(err.message);
      },
      {
        enableHighAccuracy: true, // For better precision => user can see exactly where he is
        timeout: 5000,
        maximumAge: 0,
      },
    );
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  return { position, error };
};

export default useGeolocation;
