import { useEffect, useRef } from "react";
import L from "leaflet";
import useGeolocation from "./useGeolocation";
import {
  createLocationIcon,
  createAvatarIcon,
} from "../components/map/mapIcons";

const useLocationMarker = (mapInstance) => {
  const { position } = useGeolocation();
  const markerRef = useRef(null);

  useEffect(() => {
    if (!position || !mapInstance) return;
    const { lat, lng } = position;
    if (markerRef.current) mapInstance.removeLayer(markerRef.current);
    const savedAvatar = localStorage.getItem("userAvatar");
    const icon = savedAvatar
      ? createAvatarIcon(savedAvatar)
      : createLocationIcon();
    markerRef.current = L.marker([lat, lng], { icon }).addTo(mapInstance);
  }, [position, mapInstance]);

  useEffect(() => {
    return () => {
      if (markerRef.current && mapInstance) {
        mapInstance.removeLayer(markerRef.current);
        markerRef.current = null;
      }
    };
  }, [mapInstance]);
};

export default useLocationMarker;
